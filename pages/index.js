export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans flex flex-col justify-between items-center p-6">
      <header className="w-full max-w-3xl text-center my-8">
        <h1 className="text-4xl font-bold mb-2">Francesco Chiarelli</h1>
        <p className="text-xl font-light">AI Web Consultant</p>
      </header>
      <main className="flex flex-col items-center w-full max-w-3xl mb-8">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2">Web Design</h3>
            <p className="text-sm">Creating elegant designs that convey your brand.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2">AI & Automation</h3>
            <p className="text-sm">Integrating AI solutions to automate your processes.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2">Bubble App</h3>
            <p className="text-sm">Building no-code apps with Bubble for rapid development.</p>
          </div>
        </section>
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md transform transition duration-300 hover:bg-blue-600 hover:scale-105">
          Get in Touch
        </button>
      </main>
      <footer className="w-full max-w-3xl text-center py-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Francesco Chiarelli. All rights reserved.</p>
      </footer>
    </div>
  );
}