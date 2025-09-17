function NotFound() {
  return (
    <div className="min-h-full py-5 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center mt-[5%]">
        <div className="mb-8">
          <h2 className="mt-6 text-6xl font-extrabold text-gray-700 dark:text-gray-100">
            404
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-700 dark:text-gray-100">
            Page not found
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>
        <div className="mt-8">
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#6496B3] hover:bg-[#578ba9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go back home
          </a>
        </div>
      </div>
      <div className="mt-16 w-full max-w-2xl">
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-gray-100 dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-400">
              If you think this is a mistake, please <a href="mailto:info@zimele.co.bw" className="font-semibold">contact support</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
