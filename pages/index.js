```javascript
export default function Home() {
  return (
    <>
      <div className="container">
        <header>
          <h1>Francesco Chiarelli</h1>
          <p className="description">Designer & Developer</p>
        </header>

        <main>
          <div className="services">
            <div className="card">
              <h2>Web Design</h2>
              <p>Elegant and modern web designs to bring your ideas to life.</p>
            </div>
            <div className="card">
              <h2>AI & Automation</h2>
              <p>Cutting-edge solutions for your business processes.</p>
            </div>
            <div className="card">
              <h2>Bubble App</h2>
              <p>Rapid development of applications with Bubble.io.</p>
            </div>
          </div>
        </main>

        <footer>
          <p>&copy; {new Date().getFullYear()} Francesco Chiarelli. All rights reserved.</p>
        </footer>
      </div>
      
      <style jsx global>{`
        body {
          margin: 0;
          font-family: 'Arial', sans-serif;
          background-color: #f9f9f9;
          color: #333;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 1rem;
          text-align: center;
        }

        header {
          margin: 2rem 0;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .description {
          font-size: 1.25rem;
          color: #555;
        }

        .services {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .card {
          background: #fff;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }

        h2 {
          margin-top: 0;
          font-size: 1.5rem;
          color: #222;
        }

        p {
          line-height: 1.6;
        }

        footer {
          margin-top: 2rem;
          font-size: 0.875rem;
          color: #777;
        }

        @media(min-width: 768px) {
          .services {
            flex-direction: row;
          }
        }
      `}</style>
    </>
  );
}
```