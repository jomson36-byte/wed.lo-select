import { mockVenues } from './data/mockVenues';
import { ComparisonTable } from './components/ComparisonTable';
import styles from './App.module.css';

function App() {
  // Show all venues from the system in the comparison table
  const venuesToDisplay = mockVenues;

  return (
    <div className="App">
      <header className={styles.header}>
        <div className="container">
          <h1 className="title-large text-gradient">Venue Comparison</h1>
          <p className={styles.subtitle}>
            เปรียบเทียบข้อมูลแพ็กเกจสถานที่แต่งงานแบบละเอียด
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <div className="container-full">
          <ComparisonTable venues={venuesToDisplay} />
        </div>
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <p>© 2026 Wedding Venue Comparison Tool</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
