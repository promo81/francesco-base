export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 font-sans p-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Francesco Chiarelli</h1>
        <p className="text-xl mt-2">AI Web Consultant</p>
      </header>
      <main className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-medium mb-2">Web Design</h2>
            <p>Creating modern and responsive designs that captivate users.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-medium mb-2">AI & Automation</h2>
            <p>Integrating AI solutions to optimize and automate workflows.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-medium mb-2">Bubble App</h2>
            <p>Building scalable and interactive applications using Bubble.</p>
          </div>
        </div>
      </main>
      <footer className="mt-12 text-center">
        <p>&copy; {currentYear} Francesco Chiarelli. <a href="mailto:contact@francescochiarelli.com" className="text-blue-600 hover:underline">Contact</a></p>
      </footer>
    </div>
  );
}