import React from 'react';
import { X, CheckCircle2, XCircle } from 'lucide-react';
import styles from './ComparisonTable.module.css';
import type { Venue } from '../data/mockVenues';

interface ComparisonTableProps {
  venues: Venue[];
  onClose: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ venues, onClose }) => {
  if (venues.length === 0) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('th-TH').format(price);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Compare Venues</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        <div className={styles.content}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={`${styles.th} ${styles.rowLabel}`}>Features</th>
                {venues.map(venue => (
                  <th key={venue.id} className={`${styles.th} ${styles.venueHeader}`}>
                    <img src={venue.images[0]} alt={venue.name} />
                    <div className={styles.venueName}>{venue.name}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={`${styles.td} ${styles.rowLabel}`}>Price Range (฿)</td>
                {venues.map(venue => (
                  <td key={venue.id} className={styles.td}>
                    {formatPrice(venue.priceRange.min)} - {formatPrice(venue.priceRange.max)}
                  </td>
                ))}
              </tr>
              <tr>
                <td className={`${styles.td} ${styles.rowLabel}`}>Capacity (Pax)</td>
                {venues.map(venue => (
                  <td key={venue.id} className={styles.td}>
                    {venue.capacity.min} - {venue.capacity.max}
                  </td>
                ))}
              </tr>
              <tr>
                <td className={`${styles.td} ${styles.rowLabel}`}>Included Services</td>
                {venues.map(venue => (
                  <td key={venue.id} className={styles.td}>
                    <ul className={styles.list}>
                      {venue.servicesIncluded.map((service, i) => (
                        <li key={i} className={styles.listItem}>
                          <CheckCircle2 size={16} className={styles.included} />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
              <tr>
                <td className={`${styles.td} ${styles.rowLabel}`}>Exclusions / Notes</td>
                {venues.map(venue => (
                  <td key={venue.id} className={styles.td}>
                    <ul className={styles.list}>
                      {venue.servicesExcluded.map((service, i) => (
                        <li key={i} className={styles.listItem}>
                          <XCircle size={16} className={styles.excluded} />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
