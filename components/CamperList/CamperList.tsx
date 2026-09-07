import CamperCard from "@/components/CamperCard/CamperCard";
import { Camper } from "@/types/camper";
import css from "./CamperList.module.css";

interface CamperListProps {
  campers: Camper[];
}

export default function CamperList({ campers }: CamperListProps) {
  if (!campers || campers.length === 0) {
    return <p className={css.noResults}>No campers found for your request.</p>;
  }

  return (
    <ul className={css.camperList}>
      {campers.map((camper) => (
        <li key={camper.id} className={css.listItem}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
}
