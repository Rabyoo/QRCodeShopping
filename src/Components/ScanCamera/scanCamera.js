import React, { useEffect } from "react";
import "./camera.css";
import { Html5QrcodeScanner } from "html5-qrcode";

const ScanCamera = () => {
  useEffect(() => {
    const domReady = (fn) => {
      if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
      ) {
        setTimeout(fn, 1000);
      } else {
        document.addEventListener("DOMContentLoaded", fn);
      }
    };

    domReady(() => {
      const onScanSuccess = (decodeText, decodeResult) => {
        alert("Your QR is: " + decodeText); // Fixed the alert message
      };

      const htmlScanner = new Html5QrcodeScanner("my-qr-reader", {
        fps: 10,
        qrbox: 250, // Corrected the property name
      });
      htmlScanner.render(onScanSuccess);
    });
  }, []); // Added an empty dependency array to run the effect only once

  return (
    <div className="scanner">
      <div className="container">
        <h1>Scan QR Codes</h1>
        <div className="section">
          <div id="my-qr-reader"></div>
        </div>
      </div>
      <script src="https://unpkg.com/html5-qrcode"></script>
    </div>
  );
};

export default ScanCamera;
