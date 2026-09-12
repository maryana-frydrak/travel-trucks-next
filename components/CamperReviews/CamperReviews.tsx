import { Review } from "@/types/camper";
import css from "./CamperReviews.module.css";

interface CamperReviewsProps {
  reviews: Review[];
}

export default function CamperReviews({ reviews }: CamperReviewsProps) {
  if (!reviews || reviews.length === 0) {
    return <p className={css.noReviews}>No reviews yet for this camper.</p>;
  }

  return (
    <ul className={css.list}>
      {reviews.map((review, index) => {
        const firstLetter = review.reviewer_name
          ? review.reviewer_name.charAt(0).toUpperCase()
          : "A";

        return (
          <li key={index} className={css.item}>
            <div className={css.header}>
              <div className={css.avatar}>{firstLetter}</div>
              <div className={css.meta}>
                <h3 className={css.name}>{review.reviewer_name}</h3>
                <div className={css.rating}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      className={
                        i < review.reviewer_rating
                          ? css.starActive
                          : css.starInactive
                      }
                    >
                      <use href="/icons.svg#icon-rating" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </li>
        );
      })}
    </ul>
  );
}
