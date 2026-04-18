import { MapPin } from 'lucide-react';
import styles from './VenueCard.module.css';
import type { Venue } from '../data/mockVenues';

interface VenueCardProps {
  venue: Venue;
  isCompared: boolean;
  onToggleCompare: (id: string) => void;
}

const formatPrice = (price: number) => {
  if (price >= 1000000) {
    return `${(price / 1000000).toFixed(1)}M`;
  }
  return `${(price / 1000).toFixed(0)}k`;
};

export const VenueCard = ({ venue, isCompared, onToggleCompare }: VenueCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={venue.images[0]} alt={venue.name} className={styles.image} />
        {isCompared && <div className={styles.badge}>Added to Compare</div>}
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{venue.name}</h3>
        <div className={styles.location}>
          <MapPin size={16} />
          <span>{venue.location}</span>
        </div>
        
        <p className={styles.description}>{venue.description}</p>
        
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>
               Capacity
            </span>
            <span className={styles.statValue}>
               {venue.capacity.min} - {venue.capacity.max}
            </span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>
              Starting From
            </span>
            <span className={styles.statValue}>
               ฿{formatPrice(venue.priceRange.min)}
            </span>
          </div>
        </div>

        <div className={styles.footer}>
          <button 
            className={`btn ${isCompared ? styles.compared : 'btn-outline'} ${styles.compareBtn}`}
            onClick={() => onToggleCompare(venue.id)}
          >
            {isCompared ? 'Remove from Compare' : 'Add to Compare'}
          </button>
        </div>
      </div>
    </div>
  );
};
