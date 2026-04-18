import React from 'react';
import { CheckCircle2, XCircle, Info } from 'lucide-react';
import styles from './ComparisonTable.module.css';
import type { Venue } from '../data/mockVenues';

interface ComparisonTableProps {
  venues: Venue[];
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ venues }) => {
  if (venues.length === 0) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('th-TH').format(price);
  };

  // Get all unique categories across all compared venues
  const allCategories = Array.from(new Set(
    venues.flatMap(v => v.categorizedServices?.map(s => s.category) || [])
  )).sort();

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={`${styles.th} ${styles.rowLabel}`}>Features</th>
            {venues.map(venue => (
              <th key={venue.id} className={`${styles.th} ${styles.venueHeader}`}>
                <div className={styles.imageWrapper}>
                  <img src={venue.images[0]} alt={venue.name} />
                </div>
                <div className={styles.venueName}>{venue.name}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`${styles.td} ${styles.rowLabel}`}>Package Price</td>
            {venues.map(venue => (
              <td key={venue.id} className={styles.td}>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>
                    {venue.priceRange.min === venue.priceRange.max 
                      ? `฿${formatPrice(venue.priceRange.min)}`
                      : `฿${formatPrice(venue.priceRange.min)} - ${formatPrice(venue.priceRange.max)}`
                    }
                  </span>
                  {venue.priceRange.note && (
                    <div className={styles.priceNote}>
                      <Info size={14} />
                      <span>{venue.priceRange.note}</span>
                    </div>
                  )}
                </div>
              </td>
            ))}
          </tr>
          <tr>
            <td className={`${styles.td} ${styles.rowLabel}`}>Capacity (Pax)</td>
            {venues.map(venue => (
              <td key={venue.id} className={styles.td}>
                {venue.capacity.min === venue.capacity.max
                  ? `${venue.capacity.min} ท่าน`
                  : `${venue.capacity.min} - ${venue.capacity.max} ท่าน`
                }
              </td>
            ))}
          </tr>

          {/* Categorized Services */}
          {allCategories.map(category => (
            <tr key={category}>
              <td className={`${styles.td} ${styles.rowLabel}`}>{category}</td>
              {venues.map(venue => {
                const services = venue.categorizedServices?.find(s => s.category === category);
                return (
                  <td key={venue.id} className={styles.td}>
                    {services ? (
                      <ul className={styles.list}>
                        {services.items.map((item, i) => (
                          <li key={i} className={styles.listItem}>
                            <CheckCircle2 size={16} className={styles.included} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className={styles.na}>-</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}

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
  );
};
