import React from 'react';
import { CheckCircle2, XCircle, Info } from 'lucide-react';
import styles from './ComparisonTable.module.css';
import type { Venue, VenueOption } from '../data/mockVenues';

interface ComparisonTableProps {
  venues: Venue[];
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ venues }) => {
  const [showIncomplete, setShowIncomplete] = React.useState(true);
  const [selectedOptions, setSelectedOptions] = React.useState<Record<string, string>>(() =>
    Object.fromEntries(
      venues
        .filter((venue) => venue.options?.length)
        .map((venue) => [venue.id, venue.options![0].id])
    )
  );

  if (venues.length === 0) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('th-TH').format(price);
  };

  const getSelectedOption = (venue: Venue): VenueOption | undefined => {
    if (!venue.options?.length) return undefined;

    const selectedOptionId = selectedOptions[venue.id] ?? venue.options[0].id;
    return venue.options.find((option) => option.id === selectedOptionId) ?? venue.options[0];
  };

  const getVenueView = (venue: Venue) => {
    const option = getSelectedOption(venue);

    return {
      ...venue,
      description: option?.description ?? venue.description,
      packageType: option?.packageType ?? venue.packageType,
      priceRange: option?.priceRange ?? venue.priceRange,
      capacity: option?.capacity ?? venue.capacity,
      servicesIncluded: option?.servicesIncluded ?? venue.servicesIncluded,
      servicesExcluded: option?.servicesExcluded ?? venue.servicesExcluded,
      categorizedServices: option?.categorizedServices ?? venue.categorizedServices,
      selectedOptionLabel: option?.label,
    };
  };

  // Filter venues based on whether they have detailed service data
  // We consider it "incomplete" if it doesn't have categorizedServices or is marked as "รอดำเนินการ"
  const filteredVenues = showIncomplete 
    ? venues 
    : venues.filter(v => v.categorizedServices && v.categorizedServices.length > 0 && v.location !== "รอดำเนินการ");

  const venueViews = filteredVenues.map(getVenueView);

  // Get all unique categories across all visible venues
  const allCategories = Array.from(new Set(
    venueViews.flatMap(v => v.categorizedServices?.map(s => s.category) || [])
  )).sort();

  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <button 
          className={`btn ${showIncomplete ? 'btn-outline' : 'btn-primary'} ${styles.toggleBtn}`}
          onClick={() => setShowIncomplete(!showIncomplete)}
        >
          {showIncomplete ? 'ซ่อนร้านที่ข้อมูลไม่ครบ' : 'แสดงร้านทั้งหมด'}
        </button>
        <div className={styles.info}>
          แสดง {filteredVenues.length} จาก {venues.length} สถานที่
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={`${styles.th} ${styles.rowLabel}`}>รายละเอียด</th>
              {filteredVenues.map(venue => {
                const venueView = getVenueView(venue);

                return (
                <th key={venue.id} className={`${styles.th} ${styles.venueHeader}`}>
                  <div className={styles.imageWrapper}>
                    <img src={venue.images[0]} alt={venue.name} />
                  </div>
                  <div className={styles.venueName}>{venue.name}</div>
                  {venue.options?.length ? (
                    <div className={styles.optionPicker}>
                      <label htmlFor={`option-${venue.id}`} className={styles.optionLabel}>
                        เลือก Option
                      </label>
                      <select
                        id={`option-${venue.id}`}
                        className={styles.optionSelect}
                        value={selectedOptions[venue.id] ?? venue.options[0].id}
                        onChange={(event) =>
                          setSelectedOptions((current) => ({
                            ...current,
                            [venue.id]: event.target.value,
                          }))
                        }
                      >
                        {venue.options.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {venueView.selectedOptionLabel ? (
                        <div className={styles.optionSummary}>{venueView.selectedOptionLabel}</div>
                      ) : null}
                    </div>
                  ) : null}
                </th>
              )})}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${styles.td} ${styles.rowLabel}`}>ราคาแพ็กเกจ</td>
              {venueViews.map(venue => (
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
              <td className={`${styles.td} ${styles.rowLabel}`}>ประเภทแพ็กเกจ</td>
              {venueViews.map(venue => (
                <td key={venue.id} className={styles.td}>
                  {venue.packageType || "N/A"}
                </td>
              ))}
            </tr>
            <tr>
              <td className={`${styles.td} ${styles.rowLabel}`}>Option ที่เลือก</td>
              {venueViews.map(venue => (
                <td key={venue.id} className={styles.td}>
                  <div className={styles.optionDetail}>
                    <strong>{venue.selectedOptionLabel || venue.packageType || "Default"}</strong>
                    <span>{venue.description}</span>
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className={`${styles.td} ${styles.rowLabel}`}>ความจุ (Pax)</td>
              {venueViews.map(venue => (
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
                {venueViews.map(venue => {
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
              <td className={`${styles.td} ${styles.rowLabel}`}>ข้อควรระวัง / หมายเหตุ</td>
              {venueViews.map(venue => (
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
  );
};
