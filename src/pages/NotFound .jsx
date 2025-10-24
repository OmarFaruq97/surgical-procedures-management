// src/pages/NotFound.jsx

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        পৃষ্ঠাটি খুঁজে পাওয়া যায়নি 😢
      </h2>
      <p className="text-gray-500 mb-6">
        আপনি ভুল ঠিকানায় এসেছেন বা পেজটি আর বিদ্যমান নেই।
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        🏠 হোমে ফিরে যান
      </Link>
    </div>
  );
};

export default NotFound;
