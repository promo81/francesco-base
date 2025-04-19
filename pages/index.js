Certo! Ecco un esempio di come potrebbe apparire un file `index.js` per un sito personale con Next.js, soddisfacendo i criteri delineati:

```javascript
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Francesco Chiarelli | AI Web Consultant</title>
        <meta name="description" content="Francesco Chiarelli - AI Web Consultant" />
      </Head>
      <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
        <header className="flex items-center justify-center py-8">
          <h1 className="text-4xl font-bold">Francesco Chiarelli</h1>
        </header>
        <main className="flex flex-col items-center px-4">
          <section className="text-center mb-8">
            <h2 className="text-xl mb-4">AI Web Consultant</h2>
            <p className="text-gray-600">Esperto in soluzioni web innovative e automazione AI.</p>
          </section>
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md transform transition hover:scale-105 duration-300">
              <img src="https://via.placeholder.com/300x200" alt="Web Design" className="mb-4 rounded"/>
              <h3 className="text-lg font-medium mb-2">Web Design</h3>
              <p className="text-gray-600">Creazione di siti moderni e responsivi con focus sull'utente.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition hover:scale-105 duration-300">
              <img src="https://via.placeholder.com/300x200" alt="AI & Automation" className="mb-4 rounded"/>
              <h3 className="text-lg font-medium mb-2">AI & Automation</h3>
              <p className="text-gray-600">Implementazione di soluzioni AI per ottimizzare i processi aziendali.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition hover:scale-105 duration-300">
              <img src="https://via.placeholder.com/300x200" alt="Bubble App" className="mb-4 rounded"/>
              <h3 className="text-lg font-medium mb-2">Bubble App</h3>
              <p className="text-gray-600">Progettazione e sviluppo di applicazioni con Bubble.io.</p>
            </div>
          </div>
        </main>
        <footer className="flex justify-center items-center h-16 bg-gray-200 w-full">
          <p className="text-gray-700">&copy; {new Date().getFullYear()} Francesco Chiarelli. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
```

Note importanti:
- Viene utilizzato Tailwind CSS per le classi relative allo stile, quindi assicurati di avere Tailwind CSS configurato nel tuo progetto Next.js.
- L'immagine di ogni card ha un link placeholder che potresti voler sostituire con immagini reali.
- Il codice utilizza React e Next.js per strutturare in modo semplice un layout moderno senza fogli di stile aggiuntivi.