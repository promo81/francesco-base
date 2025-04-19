export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Francesco Chiarelli</h1>
        <p style={styles.subtitle}>AI Web Consultant</p>
      </header>

      <main style={styles.main}>
        <div style={styles.card} className="card">
          <h2>Web Design</h2>
          <p>Creating responsive and modern web designs to enhance user experience.</p>
        </div>
        <div style={styles.card} className="card">
          <h2>AI & Automation</h2>
          <p>Integrating AI solutions and automation processes into your business model.</p>
        </div>
        <div style={styles.card} className="card">
          <h2>Bubble App</h2>
          <p>Building no-code apps using Bubble for efficient and scalable solutions.</p>
        </div>
      </main>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Francesco Chiarelli. All rights reserved.</p>
        <a href="mailto:contact@francescochiarelli.com" style={styles.link}>Contact</a>
      </footer>

      <style jsx>{`
        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'sans-serif',
    backgroundColor: '#f9f9f9',
    color: '#333',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  title: {
    fontSize: '2.5rem',
    margin: '0',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
  },
  main: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: '900px',
    marginBottom: '50px',
    padding: '0 20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    flex: '1',
    margin: '0 10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  footer: {
    textAlign: 'center',
    padding: '10px 0',
    marginTop: 'auto',
    width: '100%',
    borderTop: '1px solid #ddd',
  },
  link: {
    color: '#0070f3',
    textDecoration: 'none',
  }
};