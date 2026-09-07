import { campersApi } from "./api";
import { CampersResponse } from "@/types/camper";

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
