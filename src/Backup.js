/*global chrome*/
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import QrScanner from "qr-scanner";
function App() {
  const [id, setID] = useState();
  const [image, setImage] = useState();
  const [message, setMessage] = useState();
  function test() {
    /* eslint-disable no-undef */
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log(tabs[0].url);
      setID(tabs[0].id);
    });
  }

  function test2() {
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
              console.log(err || "no QR code found");
            });
        } else {
          // Grab failed, warning
          // To handle issues like permissions - https://github.com/folletto/Blipshot/issues/9
          alert(
            "I'm sorry.\n\nIt seems app wasn't able to grab the screenshot of the active tab.\n\nPlease check the extension permissions.\n\nIf the problem persists contact me at \nhttp://github.com/folletto/Blipshot/issues\n\nError: " +
              chrome.runtime.lastError.message +
              "\n\n"
          );
          return false;
        }
      }
    );
  }

  return (
    <div className="App">
      <button onClick={test}>Send alert</button>
      <div>{id}</div>
      <button onClick={test2}>Send message</button>
      <div>{message}</div>
    </div>
  );
}

export default App;
