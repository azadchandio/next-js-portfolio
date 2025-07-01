'use client';

import { useEffect, useRef, useState } from "react";

const CtrlMLoveMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === 'm') {
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!showMessage) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded shadow-lg z-50">
      I love you
    </div>
  );
};

export default CtrlMLoveMessage;
