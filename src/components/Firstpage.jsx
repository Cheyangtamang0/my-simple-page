import React from 'react';



const App = () => {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Hello, I'm Cheyang Tamang👋</h1>
        <p style={styles.intro}>
          I'm a passionate web developer with a love for creating beautiful,
          responsive, and user-friendly web applications using React. Im currentl persuing my Bachelors in
           Computer Application in Medhavi Skills University Sikkim.
           please contact me for more information.
        </p>

        
    </div>  </div>
  );
};

// Inline styles for a simple, clean look
const styles = {
  page: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #74ABE2, #5563DE)',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '1rem',
    color: '#333',
  },
  intro: {
    color: '#555',
    fontSize: '1rem',
    lineHeight: '1.5',
  },
  icons: {
    marginTop: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  icon: {
    fontSize: '1.8rem',
    color: '#5563DE',
    textDecoration: 'none',
    transition: 'transform 0.2s ease, color 0.2s ease',
  },
};



export default App;
