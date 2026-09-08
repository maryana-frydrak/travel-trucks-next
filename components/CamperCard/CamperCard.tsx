import Link from "next/link";
import { Camper } from "@/types/camper";
import css from "./CamperCard.module.css";
import { formatFeatureText } from "../../utils";

interface CamperCardProps {
  camper: Camper;
}

export default function CamperCard({ camper }: CamperCardProps) {
  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <img
          src={camper.coverImage || "/placeholder.jpg"}
          alt={camper.name}
          className={css.image}
        />
      </div>

      <div className={css.infoSection}>
        <div className={css.headerRow}>
          <h3 className={css.title}>{camper.name}</h3>
          <div className={css.priceWrapper}>
            <span className={css.price}>€{camper.price.toFixed(0)}</span>
          </div>
        </div>

        <div className={css.metaRow}>
          <span className={css.rating}>
            <svg width="16" height="16" className={css.ratingIcon}>
              <use href="/icons.svg#icon-rating" />
            </svg>
            {camper.rating} ({camper.totalReviews} Reviews)
          </span>
          <span className={css.location}>
            <svg width="20" height="20" className={css.iconLocation}>
              <use href="/icons.svg#icon-map"></use>
            </svg>
            {camper.location}
          </span>
        </div>

        <p className={css.description}>{camper.description}</p>

        <ul className={css.badgeList}>
          <li className={css.badge}>
            <svg width="20" height="20" className={css.badgeIcon}>
              <use href="/icons.svg#icon-petrol" />
            </svg>
            <span className={css.badgeText}>
              {formatFeatureText(camper.engine)}
            </span>
          </li>

          <li className={css.badge}>
            <svg width="20" height="20" className={css.badgeIcon}>
              <use href="/icons.svg#icon-automatic" />
            </svg>
            <span className={css.badgeText}>
              {formatFeatureText(camper.transmission)}
            </span>
          </li>

          <li className={css.badge}>
            <svg width="20" height="20" className={css.badgeIcon}>
              <use href="/icons.svg#icon-alcove" />
            </svg>
            <span className={css.badgeText}>
              {formatFeatureText(camper.form)}
            </span>
          </li>
        </ul>

        <Link
          href={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={css.detailsBtn}
        >
          Show more
        </Link>
      </div>
    </div>
  );
}
