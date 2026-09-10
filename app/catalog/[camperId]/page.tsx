import { fetchCamperById } from "@/lib/api/campers";
import CamperGallery from "@/components/CamperGallery/CamperGallery";

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
    <main>
      <h1>{camper.name}</h1>
      <CamperGallery gallery={camper.gallery} />
      {/* Далі виводимо галерею, характеристики, вкладки тощо */}
    </main>
  );
}
