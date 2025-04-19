export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans antialiased">
      {/* Header with centered logo */}
      <header className="container mx-auto flex flex-col items-center py-12 px-4">
        <div className="relative w-16 h-16 mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center overflow-hidden">
          <span className="text-2xl font-bold text-white">FC</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Francesco Chiarelli</h1>
        <p className="text-xl mt-2 text-gray-400">AI Web Consultant</p>
      </header>

      {/* Hero section with headline and CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 leading-tight">
          Transforming Ideas into Digital Experiences
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          Specialized in creating modern web solutions that combine elegant design with powerful functionality.
        </p>
        <a 
          href="#services" 
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium px-8 py-4 rounded-md transition duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Explore Services
        </a>
      </section>

      {/* Services section with 3 animated cards */}
      <section id="services" className="container mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-center mb-16">Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Web Design Card */}
          <div className="group bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-blue-500/30">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-300">Web Design</h3>
            <p className="text-gray-400">Creating elegant and responsive web designs that captivate and engage users, focusing on both aesthetics and functionality.</p>
          </div>

          {/* AI & Automation Card */}
          <div className="group bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-purple-500/30">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-300">AI & Automation</h3>
            <p className="text-gray-400">Leveraging AI for business automation to save time and resources efficiently, creating smarter workflows and processes.</p>
          </div>

          {/* Bubble App Card */}
          <div className="group bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-teal-500/30">
            <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-500/30 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-teal-400 transition-colors duration-300">Bubble App</h3>
            <p className="text-gray-400">Developing powerful applications without writing a single line of code using Bubble, perfect for MVPs and full-scale products.</p>
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-gray-900 to-gray-800 p-12 rounded-2xl border border-gray-800">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create a solution that perfectly matches your vision and business needs.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium px-8 py-4 rounded-md transition duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Request a Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-500">&copy; {new Date().getFullYear()} Francesco Chiarelli. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
