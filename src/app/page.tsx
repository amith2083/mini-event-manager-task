import Link from 'next/link';

export default function Home() {
  return (
    <div className=" p-6 text-center min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800 tracking-tight">
        Welcome to Mini Event Manager
      </h1>
      <Link
        href="/events"
        className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:-translate-y-0.5"
      >
        Go to Events
      </Link>
    </div>
  );
}