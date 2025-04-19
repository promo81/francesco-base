```javascript
export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '20px' }}>
      <header style={{ marginBottom: '50px', animation: 'fadeIn 2s' }}>
        <h1>Francesco Chiarelli</h1>
        <p>AI Web Consultant</p>
      </header>

      <main>
        <section style={{ marginBottom: '50px', animation: 'fadeUp 2s' }}>
          <h2>Web Design</h2>
          <img src="https://via.placeholder.com/300x200" alt="Web Design" />
          <p>Eleganti soluzioni di design web personalizzate per le tue esigenze.</p>
        </section>

        <section style={{ marginBottom: '50px', animation: 'fadeUp 2s' }}>
          <h2>AI & Automation</h2>
          <img src="https://via.placeholder.com/300x200" alt="AI & Automation" />
          <p>Automatizza i processi con intelligenza artificiale all'avanguardia.</p>
        </section>

        <section style={{ marginBottom: '50px', animation: 'fadeUp 2s' }}>
          <h2>Bubble App</h2>
          <img src="https://via.placeholder.com/300x200" alt="Bubble App" />
          <p>Crea app potenti senza codice con Bubble.</p>
        </section>
      </main>

      <footer style={{ marginTop: '50px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
        <p>&copy; {new Date().getFullYear()} Francesco Chiarelli. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}

// Add some simple animations via CSS
<style jsx global>{`
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  section {
    animation-duration: 1.5s;
  }
`}</style>
```
This code creates a modern, minimalistic, and responsive homepage for a personal website using Next.js. It features a header, sections for services with animations, and a footer with dynamic copyright information. The design prioritizes elegance and simplicity, using CSS animations for added visual appeal.