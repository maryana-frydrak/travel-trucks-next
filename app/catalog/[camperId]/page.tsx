import { fetchCamperById } from "@/lib/api/campers";
import CamperGallery from "@/components/CamperGallery/CamperGallery";
import css from "./page.module.css";
import VehicleDetails from "@/components/VehicleDetails/VehicleDetails";

interface CamperDetailsPageProps {
  params: Promise<{
    camperId: string;
  }>;
}

export default async function CamperDetailsPage({
  params,
}: CamperDetailsPageProps) {
  const { camperId } = await params;
  const camper = await fetchCamperById(camperId);

  return (
    <main className={css.container}>
      <div className={css.columnsWrapper}>
        <div className={css.leftColumn}>
          <CamperGallery gallery={camper.gallery} />
        </div>

        <div className={css.rightColumn}>
          <div className={css.mainInfoCard}>
            <h1 className={css.title}>{camper.name}</h1>

            <div className={css.infoBar}>
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

            <p className={css.price}>€{camper.price.toFixed(0)}</p>

            <p className={css.description}>{camper.description}</p>
          </div>
          <div className={css.detailsCard}>
            <VehicleDetails camper={camper} />
          </div>
        </div>
      </div>
    </main>
  );
}
