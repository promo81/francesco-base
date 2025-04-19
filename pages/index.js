export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <header className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold mb-4">Francesco Chiarelli</h1>
        <p className="text-xl font-light">AI Web Consultant</p>
      </header>

      <main className="space-y-24 px-6 max-w-5xl mx-auto">
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 transition duration-500 hover:text-blue-600">Web Design</h2>
          <p className="text-lg leading-relaxed">Crafting clean, modern and responsive websites tailored to your brand and goals.</p>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 transition duration-500 hover:text-green-500">AI & Automation</h2>
          <p className="text-lg leading-relaxed">Implementing smart automation workflows and GPT-powered assistants to boost productivity.</p>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 transition duration-500 hover:text-purple-500">Bubble App</h2>
          <p className="text-lg leading-relaxed">Building no-code apps lightning fast with Bubble.io, ready for users and scale.</p>
        </section>

        <div className="flex justify-center">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition">
            Request a Consultation
          </button>
        </div>
      </main>

      <footer className="mt-32 text-center py-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm opacity-80">&copy; {new Date().getFullYear()} Francesco Chiarelli. All rights reserved.</p>
      </footer>
    </div>
  );
}