import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-slate-900 text-center p-4">
      <h1 className="text-9xl font-bold text-gray-800 dark:text-gray-200">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-gray-700 dark:text-gray-300">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
        The page you are looking for does not exist.
      </p>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="px-6 py-3 bg-white text-gray-800 rounded shadow hover:bg-gray-100 dark:bg-slate-800 dark:text-gray-100 dark:hover:bg-slate-700"
        >
          Back to Password Generator
        </Link>
        <Link
          href="/blog"
          className="px-6 py-3 bg-white text-gray-800 rounded shadow hover:bg-gray-100 dark:bg-slate-800 dark:text-gray-100 dark:hover:bg-slate-700"
        >
          Browse the blog
        </Link>
      </div>
    </main>
  );
}
