import Link from "next/link";
import css from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found - TravelTrucks",
  description: "Sorry, the page you are looking for does not exist.",
  openGraph: {
    title: "Page not found - TravelTrucks",
    description: "Sorry, the page you are looking for does not exist.",
  },
};

const NotFound = () => {
  return (
    <div className={css.notFoundContainer}>
      <div className={css.imageWrapper}>
        <img src="/images/not-found-img.png" alt="Page not found" width={300} />
      </div>
      <h1 className={css.notFoundTitle}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/catalog">Back to catalog</Link>{" "}
    </div>
  );
};

export default NotFound;
