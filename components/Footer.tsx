import React from "react";

function Footer() {
  return (
    <footer className="mt-10 mb-10 px-4 text-center text-white">
      <small className="mb-2 block text-xs">
        &copy; 2024 Bianca. All Rights Reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
export default Footer;
