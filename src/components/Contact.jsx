import React, { useState } from "react";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-20">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-gray-300 p-4 rounded-full shadow-lg transition transform hover:scale-110"
      >
        {isOpen ? "✕" : "Contact"}
      </button>

      {isOpen && (
        <div className="mt-3 w-64 bg-gray-900 text-white rounded-lg shadow-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold text-center">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li>Email: <a href="mailto:oktokumoto@gmail.com" className="underline">oktokumoto@gmail.com</a></li>
            <li>Phone: +1 (516) 782-1234</li>
            <li><a href="https://www.linkedin.com/in/brian-tokumoto/" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a></li>
            <li><a href="https://github.com/bht8183" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}