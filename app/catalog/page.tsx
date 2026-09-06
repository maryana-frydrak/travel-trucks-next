import css from "./page.module.css";

export default function CatalogPage() {
  return (
    <main className={css.catalogPage}>
      <div className={css.container}>
        <aside className={css.filtersSection}>
          <p>Filters component</p>
        </aside>

        <section className={css.contentSection}>
          <p>Camper list goes here</p>
        </section>
      </div>
    </main>
  );
}
