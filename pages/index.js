```javascript
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="flex flex-col items-center py-16">
        <img src="/logo.png" alt="Francesco Chiarelli Logo" className="w-24 h-24 mb-4" />
        <h1 className="text-4xl font-bold">Francesco Chiarelli</h1>
        <p className="text-xl mt-2">AI Web Consultant</p>
      </header>
      <main className="flex flex-col items-center px-6 space-y-12">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          <div className="bg-gray-800 p-6 rounded-md transition transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Web Design</h2>
            <p className="text-gray-400">Creating elegant and responsive web designs that captivate and engage users.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md transition transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">AI & Automation</h2>
            <p className="text-gray-400">Leveraging AI for business automation to save time and resources efficiently.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-md transition transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Bubble App</h2>
            <p className="text-gray-400">Developing powerful applications without writing a single line of code using Bubble.</p>
          </div>
        </section>
        <div className="mt-12">
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-full transition transform hover:scale-105 hover:bg-blue-700">
            Contact Me
          </a>
        </div>
      </main>
      <footer className="py-8">
        <p className="text-center text-gray-500">&copy; {new Date().getFullYear()} Francesco Chiarelli. All rights reserved.</p>
      </footer>
    </div>
  );
}
```