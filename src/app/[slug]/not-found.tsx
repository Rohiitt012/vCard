import Link from "next/link";

export default function VCardNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gray-900 px-4">
      <div className="text-center max-w-sm">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">vCard not found</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
          This link may be broken or the vCard has been removed.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          Go to home
        </Link>
      </div>
    </div>
  );
}
