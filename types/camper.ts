export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description?: string; // робимо опціональним, якщо в GET /campers його немає в списку, але воно є на деталях
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  amenities: string[];
  coverImage: string;
  totalReviews: number;
}

export interface CampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}
