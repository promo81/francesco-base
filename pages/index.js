export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.name}>Francesco Chiarelli</h1>
        <p style={styles.subtitle}>AI Web Consultant</p>
      </header>

      <main style={styles.main}>
        <section style={styles.cardsContainer}>
          <div style={{ ...styles.card, ...styles.hover }}>
            <img src="/placeholder1.jpg" alt="Web Design" style={styles.image} />
            <h3 style={styles.cardTitle}>Web Design</h3>
            <p style={styles.cardDescription}>
              Crafting modern and responsive web designs.
            </p>
          </div>
          <div style={{ ...styles.card, ...styles.hover }}>
            <img src="/placeholder2.jpg" alt="AI & Automation" style={styles.image} />
            <h3 style={styles.cardTitle}>AI & Automation</h3>
            <p style={styles.cardDescription}>
              Integrating AI solutions to automate processes.
            </p>
          </div>
          <div style={{ ...styles.card, ...styles.hover }}>
            <img src="/placeholder3.jpg" alt="Bubble App" style={styles.image} />
            <h3 style={styles.cardTitle}>Bubble App</h3>
            <p style={styles.cardDescription}>
              Building scalable apps with Bubble.io.
            </p>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p style={styles.footerText}>
          &copy; {new Date().getFullYear()} Francesco Chiarelli - <a href="mailto:contact@francescochiarelli.com" style={styles.link}>Contact</a>
        </p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  header: {
    marginBottom: '40px',
  },
  name: {
    fontSize: '2.5em',
    margin: '0',
  },
  subtitle: {
    fontSize: '1.2em',
    color: '#666',
  },
  main: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: '90%',
    maxWidth: '250px',
    margin: '10px 0',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  hover: {
    ':hover': {
      transform: 'scale(1.05) translateY(-10px)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    },
  },
  image: {
    width: '100%',
    height: '150px',
    marginBottom: '15px',
    transition: 'transform 0.3s',
    ':hover': {
      transform: 'scale(1.1)',
    },
  },
  cardTitle: {
    fontSize: '1.5em',
    margin: '0 0 10px',
  },
  cardDescription: {
    fontSize: '1em',
    color: '#666',
  },
  footer: {
    borderTop: '1px solid #ccc',
    paddingTop: '10px',
  },
  footerText: {
    fontSize: '0.8em',
    color: '#666',
  },
  link: {
    color: '#0070f3',
    textDecoration: 'none',
  },
};