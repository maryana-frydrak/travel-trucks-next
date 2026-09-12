import css from "./VehicleDetails.module.css";
import { Camper } from "@/types/camper";
import { formatFeatureText } from "@/utils";

interface VehicleDetailsProps {
  camper: Camper;
}

export default function VehicleDetails({ camper }: VehicleDetailsProps) {
  return (
    <div className={css.detailsContainer}>
      <h3 className={css.title}>Vehicle details</h3>
      <ul className={css.badgeList}>
        {camper.form && (
          <li className={css.badge}>{formatFeatureText(camper.form)}</li>
        )}
        {camper.engine && (
          <li className={css.badge}>{formatFeatureText(camper.engine)}</li>
        )}
        {camper.transmission && (
          <li className={css.badge}>
            {formatFeatureText(camper.transmission)}
          </li>
        )}

        {Array.isArray(camper.amenities) &&
          camper.amenities.map((amenity) => (
            <li key={amenity} className={css.badge}>
              {formatFeatureText(amenity)}
            </li>
          ))}
      </ul>
      <div className={css.divider} />

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.label}>Form</span>
          <span className={css.value}>{camper.form}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Length</span>
          <span className={css.value}>{camper.length}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Width</span>
          <span className={css.value}>{camper.width}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Height</span>
          <span className={css.value}>{camper.height}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Tank</span>
          <span className={css.value}>{camper.tank}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Consumption</span>
          <span className={css.value}>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
}
