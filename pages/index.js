export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Francesco Chiarelli</h1>
        <p style={styles.subtitle}>Sviluppatore Web Full-Stack & Designer Minimalista</p>
      </header>
      <main style={styles.main}>
        <h2 style={styles.sectionTitle}>I Servizi</h2>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Web Design</h3>
            <p style={styles.cardDescription}>Creazione di interfacce utente semplici e coinvolgenti.</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>E-commerce</h3>
            <p style={styles.cardDescription}>Soluzioni di e-commerce su misura per la tua attività.</p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Sviluppo</h3>
            <p style={styles.cardDescription}>Codice pulito e scalabile per frontend e backend.</p>
          </div>
        </div>
        <h2 style={styles.sectionTitle}>Clienti</h2>
        <div style={styles.photoGrid}>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} style={styles.photoPlaceholder}></div>
          ))}
        </div>
      </main>
      <footer style={styles.footer}>
        <p style={styles.copyright}>
          &copy; {new Date().getFullYear()} Francesco Chiarelli. Tutti i diritti riservati.
        </p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'sans-serif',
    color: '#333',
    backgroundColor: '#f5f5f5',
    margin: 0,
    padding: 0,
    lineHeight: 1.6,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'space-between',
  },
  header: {
    padding: '2rem',
    textAlign: 'center',
  },
  title: {
    margin: 0,
    fontSize: '2.5rem',
  },
  subtitle: {
    fontSize: '1.25rem',
    marginTop: '0.5rem',
  },
  main: {
    flex: '1',
    padding: '2rem',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '300px',
    margin: '0.5rem',
    textAlign: 'left',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  cardDescription: {
    fontSize: '1rem',
    margin: 0,
  },
  photoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gap: '10px',
    marginTop: '1rem',
  },
  photoPlaceholder: {
    width: '100px',
    height: '100px',
    backgroundColor: '#ccc',
    borderRadius: '50%',
  },
  footer: {
    padding: '1rem',
    backgroundColor: '#fff',
    boxShadow: '0 -1px 5px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  copyright: {
    margin: 0,
    fontSize: '0.875rem',
  },
};