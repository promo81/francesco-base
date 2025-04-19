export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-white font-sans p-8">
      <header className="text-center mt-16">
        <h1 className="text-4xl font-bold mb-4">Francesco Chiarelli</h1>
        <p className="text-xl">AI Web Consultant</p>
      </header>

      <main className="flex flex-col items-center mt-16 space-y-12">
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Web Design</h2>
          <p className="text-lg text-gray-700">
            Crafting modern, responsive websites tailored to your needs.
          </p>
        </section>
        
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-2">AI & Automation</h2>
          <p className="text-lg text-gray-700">
            Implementing intelligent solutions to enhance productivity.
          </p>
        </section>
        
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Bubble App</h2>
          <p className="text-lg text-gray-700">
            Building scalable applications quickly with Bubble.
          </p>
        </section>

        <div className="mt-8">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition-transform transform hover:scale-105">
            Get in Touch
          </button>
        </div>
      </main>

      <footer className="text-center mt-16">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Francesco Chiarelli. All rights reserved.</p>
      </footer>
    </div>
  );
}