/*global chrome*/
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import QrScanner from "qr-scanner";
import QRCode from "qrcode";
function App() {
  const [id, setID] = useState();
  const [image, setImage] = useState();
  const [message, setMessage] = useState();
  const [text, setText] = useState();
  function test() {
    /* eslint-disable no-undef */
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log(tabs[0].url);
      setID(tabs[0].id);
    });
  }
  useEffect(() => {
    getQRcodeFromScreen();
  }, []);
  function getQRcodeFromScreen() {
    chrome.tabs.captureVisibleTab(
      null,
      { format: "png" /* png, jpeg */, quality: 80 },
      function (dataUrl) {
        if (dataUrl) {
          // Grab successful
          setID(dataUrl);
          QrScanner.scanImage(dataUrl)
            .then((result) => {
              setMessage(result);
            })
            .catch((err) => {
              setMessage(err);
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
    QRCode.toDataURL(text)
      .then((url) => {
        console.log(url);
        setImage(url);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div className="App">
      {/* <button onClick={test}>Send alert</button>
      <div>{id}</div>
      */}
      <div>{message}</div>
      <button onClick={getQRcodeFromScreen}>Refresh</button>

      <form>
        <label>
          Enter Text:
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
      </form>
      <button onClick={generateQR}>Generate QR</button>
      <div>{image}</div>
      <img src={image} />
    </div>
  );
}

export default App;
