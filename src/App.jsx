// import React from 'react';

// function App() {
//   const handleRedirect = () => {
//     window.location.href = 'https://github.com/SARADEEPIKAMAMIDALA/FSAD-S201';
//   };

//   return (
//     <div style={styles.container}>
//       <header style={styles.header}>
//         <h1 style={styles.title}>Deployed Page</h1>
//         <p style={styles.section}>SECTION - 201</p>
//       </header>

//       <main style={styles.main}>
//         <h2 style={styles.quote}>Explore My GitHub Repository</h2>
//         <button style={styles.button} onClick={handleRedirect}>
//           Go to GitHub 🚀
//         </button>
//       </main>

//       <footer style={styles.footer}>
//         <p>© 2025 YourName | Built with 💜 using React</p>
//       </footer>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     fontFamily: 'Segoe UI, sans-serif',
//     background: 'linear-gradient(to bottom right, #2a003f, #a076f9)', // Dark purple to lavender
//     minHeight: '100vh',
//     margin: 0,
//     padding: 0,
//     color: '#fff',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   header: {
//     padding: '2rem',
//     width: '100%',
//     textAlign: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.05)',
//     backdropFilter: 'blur(8px)',
//     borderBottom: '2px solid #7e22ce',
//   },
//   title: {
//     fontSize: '3rem',
//     margin: 0,
//     fontWeight: 'bold',
//     color: '#f3e8ff',
//   },
//   section: {
//     fontSize: '1.2rem',
//     marginTop: '0.5rem',
//     fontStyle: 'italic',
//     color: '#e9d5ff',
//   },
//   main: {
//     flex: 1,
//     padding: '2rem',
//     textAlign: 'center',
//   },
//   quote: {
//     fontSize: '1.8rem',
//     marginBottom: '2rem',
//     fontWeight: 600,
//     color: '#ede9fe',
//   },
//   button: {
//     padding: '0.75rem 1.5rem',
//     fontSize: '1rem',
//     backgroundColor: '#c084fc',
//     color: '#2a003f',
//     border: 'none',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
//     transition: 'transform 0.2s ease, background-color 0.3s ease',
//   },
//   footer: {
//     padding: '1rem',
//     width: '100%',
//     textAlign: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.05)',
//     fontSize: '0.9rem',
//     color: '#e9d5ff',
//     borderTop: '2px solid #7e22ce',
//   },
// };

// export default App;
// import React from 'react';

// function App() {
//   const handleRedirect = () => {
//     window.location.href = 'https://github.com/SARADEEPIKAMAMIDALA/FSAD-S201';
//   };

//   return (
//     <div style={styles.wrapper}>
//       <div style={styles.left}>
//         <h1 style={styles.title}>
//           Taste <br />
//           <span style={styles.rewind}>Re—wind</span>
//         </h1>
//         <p style={styles.tagline}>Your music, turned back in time.</p>
//         <button style={styles.button} onClick={handleRedirect}>
//           LET’S RE⏪IND
//         </button>
//       </div>

//       <div style={styles.right}>
//         <img
//           src="https://i.ibb.co/wMsyRW5/britney.jpg" // sample b/w image similar to yours
//           alt="hero"
//           style={styles.image}
//         />
//       </div>
//     </div>
//   );
// }

// const styles = {
//   wrapper: {
//     display: 'flex',
//     height: '100vh',
//     backgroundColor: '#2D283E', // background base
//     color: '#D1D7E0',
//     fontFamily: 'Segoe UI, sans-serif',
//     padding: '2rem',
//     boxSizing: 'border-box',
//   },
//   left: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     paddingLeft: '4rem',
//   },
//   right: {
//     flex: 1,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: '90%',
//     maxWidth: '500px',
//     borderRadius: '10px',
//     opacity: 0.85,
//     filter: 'grayscale(100%)',
//   },
//   title: {
//     fontSize: '3.5rem',
//     fontWeight: 'bold',
//     color: '#802BB1',
//     marginBottom: '1rem',
//   },
//   rewind: {
//     color: '#802BB1',
//     display: 'inline-block',
//     borderBottom: '4px solid #802BB1',
//     paddingBottom: '0.2rem',
//   },
//   tagline: {
//     fontSize: '1.2rem',
//     color: '#D1D7E0',
//     marginBottom: '2rem',
//   },
//   button: {
//     padding: '0.75rem 1.5rem',
//     backgroundColor: '#802BB1',
//     color: '#fff',
//     fontSize: '1rem',
//     border: 'none',
//     borderRadius: '30px',
//     cursor: 'pointer',
//     letterSpacing: '1px',
//     fontWeight: 600,
//     transition: 'transform 0.2s ease-in-out',
//   },
// };

// export default App;
import React from 'react';
import './App.css';

function App() {
  const handleRedirect = () => {
    window.location.href = "https://github.com/SARADEEPIKAMAMIDALA/FSAD-S201";
  };

  return (
    <div className="app-container">
      <div className="overlay">
        <h1 className="title">Deployed Page</h1>
        <p className="section">SECTION - S201</p>
        <button className="github-button" onClick={handleRedirect}>
          🔗 Visit GitHub Repository
        </button>
      </div>
    </div>
  );
}

export default App;
