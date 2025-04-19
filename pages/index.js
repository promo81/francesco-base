export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between font-sans bg-gray-50">
      <header className="w-full py-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Francesco Chiarelli</h1>
        <p className="text-xl text-gray-600 mt-2">AI Web Consultant</p>
      </header>
      <main className="flex-grow flex flex-col items-center mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((service) => (
            <div
              key={service}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src="https://via.placeholder.com/300x200"
                alt={`Service ${service}`}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Service {service}</h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="w-full py-4 text-center border-t border-gray-200">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Francesco Chiarelli.{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Contact
          </a>
        </p>
      </footer>
    </div>
  );
}