```javascript
export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>Francesco Chiarelli</h1>
        <p className="description">Sviluppatore Web & Consulente Tech</p>
      </header>
      <main>
        <section className="services">
          <div className="card">
            <h2>Web Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.</p>
          </div>
          <div className="card">
            <h2>AI & Automation</h2>
            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="card">
            <h2>Bubble App</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
          </div>
        </section>
        <button className="cta-button">Contattami</button>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Francesco Chiarelli. Tutti i diritti riservati.</p>
      </footer>
      <style jsx>{`
        .container {
          font-family: sans-serif;
          color: #333;
          background-color: #f9f9f9;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 0 20px;
          text-align: center;
        }
        header {
          margin-bottom: 40px;
        }
        h1 {
          font-size: 2.5em;
          margin: 0;
        }
        .description {
          font-size: 1.25em;
          margin-top: 10px;
        }
        .services {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 600px;
          width: 100%;
          margin: 20px 0;
        }
        .card {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
        }
        .card:hover {
          transform: translateY(-5px);
        }
        h2 {
          margin: 0 0 10px;
          font-size: 1.5em;
        }
        button.cta-button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 20px;
          transition: background-color 0.2s ease;
        }
        button.cta-button:hover {
          background-color: #005bb5;
        }
        footer {
          margin-top: 40px;
        }
        @media (min-width: 600px) {
          .services {
            flex-direction: row;
          }
        }
      `}</style>
      <style jsx global>{`
        body, html {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}
```