import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  onClearFilters?: () => void;
  onViewAll?: () => void;
}

export default function ErrorMessage({
  onClearFilters,
  onViewAll,
}: ErrorMessageProps) {
  return (
    <div className={css.errorContainer}>
      <div className={css.imageWrapper}>
        <img src="/images/not-found-img.png" alt="No campers found" />
      </div>

      <h2 className={css.errorTitle}>No campers found</h2>
      <p className={css.errorText}>
        We couldn't find any campers that match your filters.
        <br />
        Try adjusting your search or clearing some filters.
      </p>

      <div className={css.actions}>
        <button type="button" className={css.clearBtn} onClick={onClearFilters}>
          <svg width="12" height="12" className={css.iconClose}>
            <use href="/icons.svg#icon-close"></use>
          </svg>
          Clear filters
        </button>
        <button type="button" className={css.viewAllBtn} onClick={onViewAll}>
          View all campers
        </button>
      </div>
    </div>
  );
}
