export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f4f9', color: '#333', padding: '2rem', textAlign: 'center' }}>
      <header style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0', color: '#222' }}>Francesco Chiarelli</h1>
        <p style={{ fontSize: '1.25rem', margin: '0', color: '#666' }}>AI Web Consultant</p>
      </header>
      <main>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '300px' }}>
            <h2 style={{ fontSize: '1.5rem', margin: '0 0 1rem 0', color: '#222' }}>Web Design</h2>
            <p style={{ margin: '0', color: '#666' }}>Creazione di interfacce web moderne e reattive, focalizzate sull'esperienza utente.</p>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '300px' }}>
            <h2 style={{ fontSize: '1.5rem', margin: '0 0 1rem 0', color: '#222' }}>AI & Automazione</h2>
            <p style={{ margin: '0', color: '#666' }}>Soluzioni di intelligenza artificiale per migliorare l'efficienza dei processi aziendali.</p>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '300px' }}>
            <h2 style={{ fontSize: '1.5rem', margin: '0 0 1rem 0', color: '#222' }}>Bubble App</h2>
            <p style={{ margin: '0', color: '#666' }}>Sviluppo di applicazioni web senza codice con la piattaforma Bubble.</p>
          </div>
        </div>
      </main>
      <footer style={{ marginTop: '4rem', color: '#999' }}>
        <p style={{ margin: '0' }}>© {currentYear} Francesco Chiarelli. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}