export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="text-center px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to GlobalConnect
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Connect with professionals worldwide, build your network, and grow your career.
          Join the global community of innovators, leaders, and creators.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Get Started
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-8 rounded-lg border border-gray-300 transition-colors">
            Learn More
          </button>
        </div>
      </main>
    </div>
  );
}
