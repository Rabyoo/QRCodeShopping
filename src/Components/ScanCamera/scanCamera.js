import React, { useEffect } from "react";
import "./camera.css";
import { Html5QrcodeScanner } from "html5-qrcode";
import Header from "../Header/Header";

const ScanCamera = () => {
  useEffect(() => {
    function domReady(fn) {
      if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
      ) {
        setTimeout(fn, 200);
      } else {
        document.addEventListener("DOMContentLoaded", fn);
      }
    }

    domReady(function () {
      // If found your qr code
      function onScanSuccess(decodeText, decodeResult) {
        const confirmation = window.confirm("Your QR is : " + decodeText);
        if (confirmation) {
          window.open(decodeText, "_blank");
        }
      }

      let htmlscanner = new Html5QrcodeScanner("my-qr-reader", {
        fps: 10,
        qrbos: 250,
      });
      htmlscanner.render(onScanSuccess);
    });
  }, []); // Added an empty dependency array to run the effect only once

  return (
    <div className="scanner">
      <Header />

      <div className="container">
        <h1>Scan QR Codes</h1>
        <div className="section">
          <div id="my-qr-reader"></div>
        </div>
      </div>
      <script type="text/javascript" src="/utest/zxing-js.umd.js"></script>
      <script src="https://unpkg.com/html5-qrcode"></script>
    </div>
  );
};

export default ScanCamera;
