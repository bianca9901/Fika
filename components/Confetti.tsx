"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DynamicConfetti = dynamic(() => import("react-confetti"), { ssr: false });

function Confetti() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <DynamicConfetti
          recycle={false}
          numberOfPieces={100}
          gravity={0.2}
          colors={["#2196f3", "#ffd600"]}
          width={window.innerWidth || 300}
          height={window.innerHeight || 200}
        />
      )}
    </>
  );
}

export default Confetti;
