import Link from "next/link";
import { Camper } from "@/types/camper";
import css from "./CamperCard.module.css";

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
            <button
              type="button"
              className={css.favoriteBtn}
              aria-label="Add to favorites"
            >
              {/* Іконка серця */}
            </button>
          </div>
        </div>

        <div className={css.metaRow}>
          <span className={css.rating}>
            ★ {camper.rating} ({camper.totalReviews} Reviews)
          </span>
          <span className={css.location}>📍 {camper.location}</span>
        </div>

        <p className={css.description}>{camper.description}</p>

        <ul className={css.badgeList}>
          <li className={css.badge}>{camper.transmission}</li>
          <li className={css.badge}>{camper.engine}</li>
          <li className={css.badge}>{camper.form}</li>
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
