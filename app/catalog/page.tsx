"use client";

import CamperList from "@/components/CamperList/CamperList";
import css from "./page.module.css";
import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCampers } from "@/lib/api/campers";
import Loader from "@/components/Loader/Loader";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";

export default function CatalogPage() {
  const [filters, setFilters] = useState({});

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["campers", filters],
    queryFn: ({ pageParam }) => fetchCampers({ pageParam, filters }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const loadedCount = allPages.flatMap((page) => page.campers).length;
      return loadedCount < lastPage.total ? allPages.length + 1 : undefined;
    },
  });

  const campers = data?.pages.flatMap((page) => page.campers) || [];

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newFilters: Record<string, string> = {
      location: (formData.get("location") as string)?.trim() || "",
      form: (formData.get("form") as string) || "",
      engine: (formData.get("engine") as string) || "",
      transmission: (formData.get("transmission") as string) || "",
    };

    Object.keys(newFilters).forEach(
      (key) => !newFilters[key] && delete newFilters[key],
    );

    setFilters(newFilters);
  };

  const handleClear = () => {
    setFilters({});
    const formElement = document.getElementById(
      "filter-form",
    ) as HTMLFormElement;
    formElement?.reset();
  };

  return (
    <main className={css.catalogPage}>
      <div className={css.container}>
        <aside className={css.filtersSection}>
          <form id="filter-form" onSubmit={handleSearch}>
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

            <button type="submit" className={css.searchBtn}>
              Search
            </button>
            <button
              type="button"
              onClick={handleClear}
              className={css.clearBtn}
            >
              <svg width="12" height="12" className={css.iconClose}>
                <use href="/icons.svg#icon-close"></use>
              </svg>
              Clear filters
            </button>
          </form>
        </aside>

        <section className={css.contentSection}>
          {isLoading && <Loader />}
          {isError && (
            <ErrorMessage
              onClearFilters={handleClear}
              onViewAll={handleClear}
            />
          )}

          {!isLoading && !isError && campers.length === 0 && (
            <ErrorMessage
              onClearFilters={handleClear}
              onViewAll={handleClear}
            />
          )}

          {!isLoading && !isError && campers.length > 0 && (
            <CamperList campers={campers} />
          )}

          {hasNextPage && (
            <button
              type="button"
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className={css.loadMoreBtn}
            >
              {isFetchingNextPage ? "Loading..." : "Load more"}
            </button>
          )}
        </section>
      </div>
    </main>
  );
}
