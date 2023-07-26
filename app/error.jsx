"use client"
const Error = ({ error, onTryAgain }) => {
  // Handle the error

  // Render a fallback UI
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-red-500 font-bold">The error was:</p>
        <pre className="text-red-600 text-sm">{error.message}</pre>
        {onTryAgain && (
          <button
            onClick={onTryAgain}
            className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Try Again - Use Client
          </button>
        )}
      </div>
    </div>
  );
};

export default Error;