"use client";

import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function InstallPWA() {
  const [isProduction, setIsProduction] = useState(false);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    // Check if we're in production
    setIsProduction(process.env.NODE_ENV === "production");
  }, []);

  if (!isProduction) {
    return null; // Don't show anything in development
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setShowQR(!showQR)}
        className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        {showQR ? "Close QR" : "Install App"}
      </button>

      {showQR && (
        <div className="absolute bottom-16 right-0 bg-white p-4 rounded-lg shadow-xl">
          <h3 className="text-lg font-semibold mb-2">Scan to Install</h3>
          <p className="text-sm text-gray-600 mb-4">
            Scan this QR code with your phone's camera to install the app
          </p>
          <div className="bg-white p-2 rounded">
            <QRCodeSVG
              value={window.location.href}
              size={200}
              level="H"
              includeMargin={true}
            />
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p>Or visit:</p>
            <p className="break-all font-mono text-xs mt-1">
              {window.location.href}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
