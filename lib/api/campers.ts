import { campersApi } from "./api";
import { CampersResponse, Review } from "@/types/camper";

export async function fetchCampers({ pageParam = 1, filters = {} }) {
  const response = await campersApi.get<CampersResponse>("/campers", {
    params: {
      page: pageParam,
      perPage: 4,
      ...filters,
    },
  });
  return response.data;
}

export async function fetchCamperById(id: string) {
  const res = await campersApi.get(`/campers/${id}`);
  if (!res) {
    throw new Error("Failed to fetch camper details");
  }
  return res.data;
}

export async function fetchCamperReviews(id: string): Promise<Review[]> {
  const res = await campersApi.get<Review[]>(`/campers/${id}/reviews`);
  if (!res) {
    return [];
  }
  return res.data;
}

export async function postBookingRequest(
  id: string,
  data: { name: string; email: string; date?: string; comment?: string },
) {
  const res = await campersApi.post(`/campers/${id}/booking-requests`, data);
  return res.data;
}
