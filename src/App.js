/*global chrome*/
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import QrScanner from "qr-scanner";
import QRCode from "qrcode";

function App() {
  const [image, setImage] = useState();
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(async () => {
    if (message == "") {
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
            .then(async (result) => {
              setMessage(result);
              setErrorMsg("");
            })
            .catch((err) => {
              setErrorMsg(err);
              console.log(
                err || "no QR code found, Would you like to refresh ?"
              );
            });
        } else {
          // Grab failed, warning
          // To handle issues like permissions - https://github.com/folletto/Blipshot/issues/9
          alert(
            "I'm sorry.\n\nIt seems the extension wasn't able to grab the screenshot of the active tab. Error: " +
              chrome.runtime.lastError.message +
              "\n\n"
          );
          return false;
        }
      }
    );
  }
  function generateQR() {
    QRCode.toDataURL(message)
      .then((url) => {
        console.log(url);
        setImage(url);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div className="">
      <div className="header">
        <div className="content">
          <h1 class="start">
            <span class="end1">Q</span>
            <span class="middle1">Hello World</span>
            <span class="middle2">
              <i class="fas fa-code"></i>
            </span>
            <span class="end2">R</span>
          </h1>
          <div>{errorMsg}</div>
          <input
            defaultValue={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></input>
          <button onClick={getQRcodeFromScreen}>Refresh</button>
          <img src={image}></img>
          <button onClick={generateQR}>Generate QR Code</button>
        </div>

        <div className="btn">
          <button type="">
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
        </div>
      </div>
      <div className="App-header">
        <p></p>
        <h1></h1>
      </div>
    </div>
  );
}

export default App;
