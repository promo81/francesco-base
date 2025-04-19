```jsx
export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-sans">
      <header className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Francesco Chiarelli</h1>
        <p className="text-lg text-gray-600">AI Web Consultant</p>
      </header>

      <main className="flex flex-col items-center w-full flex-1 px-20 text-center space-y-20">
        <section className="max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Web Design</h2>
          <p className="text-gray-500">Seamlessly integrating design with functionality to create stunning web experiences.</p>
        </section>

        <section className="max-w-md">
          <h2 className="text-2xl font-semibold mb-4">AI & Automation</h2>
          <p className="text-gray-500">Leveraging artificial intelligence to automate and optimize business processes.</p>
        </section>

        <section className="max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Bubble App</h2>
          <p className="text-gray-500">Building versatile no-code applications that empower businesses to innovate quickly.</p>
        </section>

        <section className="max-w-md py-10">
          <h3 className="text-xl font-semibold mb-4">Richiedi Consulenza</h3>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
            Contattami
          </button>
        </section>
      </main>

      <footer className="w-full py-8 flex justify-center items-center border-t">
        <p className="text-gray-600">&copy; {currentYear} Francesco Chiarelli</p>
      </footer>
    </div>
  );
}
```