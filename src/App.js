/*global chrome*/
import "./App.css";
import { useEffect, useState } from "react";
import QrScanner from "qr-scanner";
import QRCode from "qrcode";
import CopyToClipboard from "react-copy-to-clipboard";

function App() {
  const [image, setImage] = useState();
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    if (message === "") {
      getQRcodeFromScreen();
    }
    generateQR();
  }, [message]);
  function getQRcodeFromScreen() {
    chrome.tabs.captureVisibleTab(
      null,
      { format: "png" /* png, jpeg */, quality: 80 },
      function (dataUrl) {
        if (dataUrl) {
          // Grab successful
          QrScanner.scanImage(dataUrl)
            .then((result) => {
              setMessage(result);
              setErrorMsg("");
            })
            .catch((err) => {
              console.log(err);
              setErrorMsg(err);
            });
        } else {
          setErrorMsg(
            "We're sorry. the request is exceed the MAX_CAPTURE_VISIBLE_TAB_CALLS_PER_SECOND quota..  \n let try again after a few seconds"
          );
          return false;
        }
      }
    );
  }
  function generateQR() {
    QRCode.toDataURL(message).then((url) => {
      setImage(url);
    });
  }
  function downloadImage(src) {
    const img = new Image();
    img.crossOrigin = "anonymous"; // This tells the browser to request cross-origin access when trying to download the image data.
    // ref: https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image#Implementing_the_save_feature
    img.src = src;
    img.onload = () => {
      // create Canvas
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      // create a tag
      const a = document.createElement("a");
      a.download = "download.png";
      a.href = canvas.toDataURL("image/png");
      a.click();
    };
  }
  return (
    <div>
      <div className="header">
        <div className="content">
          <h1 class="start">
            <span class="end1">Q</span>
            <span class="middle1">R-Scanne</span>
            <span class="middle2">
              <i class="fas fa-code"></i>
            </span>
            <span class="end2">R</span>
          </h1>
        </div>
        <div className="btn">
          <CopyToClipboard text={message}>
            <button>
              <svg
                className="btn-copy"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                />
              </svg>
            </button>
          </CopyToClipboard>
        </div>
      </div>
      <div className="inline">
        <input
          className="input"
          defaultValue={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></input>

        <button
          className="button"
          onClick={() => {
            getQRcodeFromScreen();
          }}
        >
          Refresh
        </button>
      </div>
      <div className="errortext">{errorMsg}</div>
      <div className="">
        <img
          className="qr-image"
          src={image}
          onClick={() => {
            downloadImage(image);
          }}
        ></img>
      </div>
    </div>
  );
}

export default App;
