export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Francesco Chiarelli</h1>
        <p style={styles.subtitle}>AI Web Consultant</p>
      </header>
      <main style={styles.main}>
        <div style={styles.cardContainer}>
          <Card title="Web Design" imageSrc="https://via.placeholder.com/300x200" />
          <Card title="AI & Automation" imageSrc="https://via.placeholder.com/300x200" />
          <Card title="Bubble App" imageSrc="https://via.placeholder.com/300x200" />
        </div>
      </main>
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Francesco Chiarelli. <a href="contact.html" style={styles.link}>Contact</a></p>
      </footer>
    </div>
  );
}

function Card({ title, imageSrc }) {
  return (
    <div style={styles.card}>
      <img src={imageSrc} alt={title} style={styles.cardImage} />
      <h3 style={styles.cardTitle}>{title}</h3>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'sans-serif',
    backgroundColor: '#f9f9f9',
    color: '#333',
    textAlign: 'center',
    padding: '0 20px',
  },
  header: {
    marginTop: '50px',
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '50px 0',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '960px',
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    margin: '10px',
    transition: 'transform 0.3s, box-shadow 0.3s',
    maxWidth: '300px',
    cursor: 'pointer',
  },
  cardImage: {
    width: '100%',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
  cardTitle: {
    padding: '15px',
    margin: '0',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  },
  footer: {
    borderTop: '1px solid #ddd',
    padding: '20px',
    fontSize: '0.9rem',
  },
  link: {
    color: '#0070f3',
    textDecoration: 'none',
  }
};