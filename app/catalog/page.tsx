import css from "./page.module.css";

export default function CatalogPage() {
  return (
    <main className={css.catalogPage}>
      <div className={css.container}>
        <aside className={css.filtersSection}>
          <div className={css.filterGroup}>
            <label htmlFor="location" className={css.filterLabel}>
              Location
            </label>
            <div className={css.inputWrapper}>
              <svg width="20" height="20" className={css.iconLocation}>
                <use href="/icons.svg#icon-map"></use>
              </svg>
              <input
                id="location"
                type="text"
                placeholder="City"
                className={css.locationInput}
              />
            </div>
          </div>
          <h3 className={css.filtersTitle}>Filters</h3>

          <div className={css.filterCategory}>
            <h4 className={css.categoryTitle}>Camper form</h4>
            <ul className={css.radioList}>
              <li>
                <label className={css.radioLabel}>
                  <input
                    type="radio"
                    name="form"
                    value="alcove"
                    className={css.visuallyHidden}
                  />
                  <span className={css.customRadio}></span>
                  Alcove
                </label>
              </li>
              <li>
                <label className={css.radioLabel}>
                  <input
                    type="radio"
                    name="form"
                    value="panelVan"
                    className={css.visuallyHidden}
                  />
                  <span className={css.customRadio}></span>
                  Panel Van
                </label>
              </li>
              <li>
                <label className={css.radioLabel}>
                  <input
                    type="radio"
                    name="form"
                    value="fullyIntegrated"
                    className={css.visuallyHidden}
                  />
                  <span className={css.customRadio}></span>
                  Integrated
                </label>
              </li>
              <li>
                <label className={css.radioLabel}>
                  <input
                    type="radio"
                    name="form"
                    value="semiIntegrated"
                    className={css.visuallyHidden}
                  />
                  <span className={css.customRadio}></span>
                  Semi Integrated
                </label>
              </li>
            </ul>
          </div>

          <div className={css.filterCategory}>
            <h4 className={css.categoryTitle}>Engine</h4>
            <ul className={css.radioList}>
              <li>
                <label className={css.radioLabel}>
                  <input
                    type="radio"
                    name="engine"
                    value="diesel"
                    className={css.visuallyHidden}
                  />
                  <span className={css.customRadio}></span>
                  Diesel
                </label>
              </li>
              <li>
                <label className={css.radioLabel}>
                  <input
                    type="radio"
                    name="engine"
                    value="petrol"
                    className={css.visuallyHidden}
                  />
                  <span className={css.customRadio}></span>
                  Petrol
                </label>
              </li>
              <li>
                <label className={css.radioLabel}>
                  <input
                    type="radio"
                    name="engine"
                    value="hybrid"
                    className={css.visuallyHidden}
                  />
                  <span className={css.customRadio}></span>
                  Hybrid
                </label>
              </li>
              <li>
                <label className={css.radioLabel}>
                  <input
                    type="radio"
                    name="engine"
                    value="electric"
                    className={css.visuallyHidden}
                  />
                  <span className={css.customRadio}></span>
                  Electric
                </label>
              </li>
            </ul>
          </div>

          <div className={css.filterCategory}>
            <h4 className={css.categoryTitle}>Transmission</h4>
            <ul className={css.radioList}>
              <li>
                <label className={css.radioLabel}>
                  <input
                    type="radio"
                    name="transmission"
                    value="automatic"
                    className={css.visuallyHidden}
                  />
                  <span className={css.customRadio}></span>
                  Automatic
                </label>
              </li>
              <li>
                <label className={css.radioLabel}>
                  <input
                    type="radio"
                    name="transmission"
                    value="manual"
                    className={css.visuallyHidden}
                  />
                  <span className={css.customRadio}></span>
                  Manual
                </label>
              </li>
            </ul>
          </div>

          <button type="button" className={css.searchBtn}>
            Search
          </button>
          <button type="button" className={css.clearBtn}>
            <svg width="12" height="12" className={css.iconClose}>
              <use href="/icons.svg#icon-close"></use>
            </svg>
            Clear filters
          </button>
        </aside>

        <section className={css.contentSection}>
          <p>Camper list goes here</p>
        </section>
      </div>
    </main>
  );
}
