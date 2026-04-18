import React, { useState } from 'react';
import { mockVenues } from './data/mockVenues';
import { VenueCard } from './components/VenueCard';
import { ComparisonTable } from './components/ComparisonTable';
import styles from './App.module.css';

function App() {
  const [comparedVenueIds, setComparedVenueIds] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const handleToggleCompare = (id: string) => {
    setComparedVenueIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(vId => vId !== id);
      }
      if (prev.length >= 3) {
        alert("You can only compare up to 3 venues at a time.");
        return prev;
      }
      return [...prev, id];
    });
  };

  const comparedVenues = mockVenues.filter(v => comparedVenueIds.includes(v.id));

  return (
    <div className="App">
      <header className={styles.header}>
        <div className="container">
          <h1 className="title-large text-gradient">Find Your Perfect Venue</h1>
          <p className={styles.subtitle}>
            เปรียบเทียบสถานที่จัดงานแต่งงานที่ใช่ เพื่อวันที่สำคัญที่สุดของคุณ
          </p>
        </div>
      </header>

      <main className={`container ${styles.main}`}>
        <div className={styles.grid}>
          {mockVenues.map(venue => (
            <VenueCard 
              key={venue.id} 
              venue={venue} 
              isCompared={comparedVenueIds.includes(venue.id)}
              onToggleCompare={handleToggleCompare}
            />
          ))}
        </div>
      </main>

      {/* Floating Comparison Bar */}
      <div className={`${styles.floatingBar} ${comparedVenueIds.length > 0 ? styles.floatingBarVisible : ''}`}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div className={styles.compareInfo}>
            <span className={styles.compareCount}>{comparedVenueIds.length} Venues Selected</span>
            <div className={styles.compareAvatars}>
              {comparedVenues.map(v => (
                <img key={v.id} src={v.images[0]} alt={v.name} className={styles.avatar} title={v.name} />
              ))}
            </div>
            {comparedVenueIds.length > 0 && (
              <button className={styles.clearBtn} onClick={() => setComparedVenueIds([])}>
                Clear All
              </button>
            )}
          </div>
          
          <button 
            className="btn btn-primary" 
            disabled={comparedVenueIds.length < 2}
            onClick={() => setShowComparison(true)}
          >
            Compare Now
          </button>
        </div>
      </div>

      {/* Comparison Modal */}
      {showComparison && (
        <ComparisonTable 
          venues={comparedVenues} 
          onClose={() => setShowComparison(false)} 
        />
      )}
    </div>
  );
}

export default App;
