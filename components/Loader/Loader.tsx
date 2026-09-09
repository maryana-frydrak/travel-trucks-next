import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.backdrop}>
      <div className={css.loaderCard}>
        <svg className={css.svgSpinner} width="72" height="72">
          <use href="/icons.svg#icon-spiner" />
        </svg>

        <h3 className={css.loaderTitle}>Loading trucks...</h3>
        <p className={css.loaderText}>
          Please wait while we fetch the best <br /> travel trucks for you
        </p>
      </div>
    </div>
  );
}
