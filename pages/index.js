export default function Home() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.name}>Francesco Chiarelli</h1>
        <h2 style={styles.subtitle}>AI Web Consultant</h2>
      </header>
      
      <main style={styles.main}>
        <p style={styles.description}>
          Aiuto le aziende a sfruttare il potenziale del web e dell'intelligenza artificiale per accelerare il proprio business.
        </p>
        
        <div style={styles.services}>
          <div style={styles.card} className="card">
            <h3 style={styles.cardTitle}>Web Design</h3>
            <p style={styles.cardDescription}>
              Design moderno e funzionale per un'esperienza utente straordinaria.
            </p>
          </div>
          <div style={styles.card} className="card">
            <h3 style={styles.cardTitle}>AI & Automation</h3>
            <p style={styles.cardDescription}>
              Soluzioni personalizzate di intelligenza artificiale e automazione.
            </p>
          </div>
          <div style={styles.card} className="card">
            <h3 style={styles.cardTitle}>Bubble App</h3>
            <p style={styles.cardDescription}>
              Creazione di applicazioni personalizzate senza codice con Bubble.
            </p>
          </div>
        </div>
      </main>
      
      <footer style={styles.footer}>
        <p>© {currentYear} Francesco Chiarelli. All rights reserved.</p>
        <a href="mailto:info@example.com" style={styles.contactLink}>Contact</a>
      </footer>

      <style jsx>{`
        .card:hover {
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    backgroundColor: '#f8f9fa',
    color: '#343a40',
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: '40px',
  },
  name: {
    fontSize: '2.5em',
    margin: '0',
  },
  subtitle: {
    fontSize: '1.5em',
    margin: '10px 0',
    color: '#6c757d',
  },
  main: {
    maxWidth: '800px',
    width: '100%',
  },
  description: {
    fontSize: '1.2em',
    marginBottom: '40px',
    color: '#495057',
  },
  services: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    width: 'calc(33% - 40px)',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardTitle: {
    fontSize: '1.2em',
    marginBottom: '10px',
  },
  cardDescription: {
    color: '#6c757d',
  },
  footer: {
    marginTop: 'auto',
    paddingTop: '40px',
    fontSize: '0.9em',
    color: '#6c757d',
  },
  contactLink: {
    textDecoration: 'none',
    color: '#007bff',
    marginLeft: '10px',
  },
};