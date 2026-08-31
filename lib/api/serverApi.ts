import { NotesResponse } from "@/types/api";
import { nextServer } from "./api";
import { Note } from "@/types/note";

export const checkServerSession = async () => {
  const { cookies } = await import("next/headers");
  const cookieStore = await cookies();
  const res = await nextServer.get(`/auth/session`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res;
};

export const fetchNotes = async (
  page = 1,
  perPage = 10,
  tag: string | null = null,
  search: string = "",
) => {
  const { cookies } = await import("next/headers");
  const cookieStore = await cookies();

  const res = await nextServer.get<NotesResponse>(`/notes`, {
    params: {
      page,
      perPage,
      tag: tag || undefined,
      search: search || undefined,
    },
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { cookies } = await import("next/headers");
  const cookieStore = await cookies();

  const res = await nextServer.get<Note>(`/notes/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res.data;
};

export const getMe = async () => {
  const { cookies } = await import("next/headers");
  const cookieStore = await cookies();
  const res = await nextServer.get(`/users/me`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res.data;
};
