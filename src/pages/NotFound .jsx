import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 md:ml-64 min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 mb-4">৪০৪</h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2">
        পৃষ্ঠাটি খুঁজে পাওয়া যায়নি 😢
      </h2>
      <p className="text-sm sm:text-base text-gray-500 mb-6 max-w-md">
        আপনি ভুল ঠিকানায় এসেছেন বা পেজটি আর বিদ্যমান নেই।
      </p>
      <Link
        to="/dashboard"
        className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
      >
        🏠 ড্যাশবোর্ডে ফিরে যান
      </Link>
    </div>
  );
};

export default NotFound;