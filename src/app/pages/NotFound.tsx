export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl text-gray-200 mb-4">404</h1>
        <h2 className="text-4xl mb-4 text-gray-900">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-full"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}