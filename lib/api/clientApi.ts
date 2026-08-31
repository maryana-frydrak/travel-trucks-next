import { NotesResponse } from "@/types/api";
import { nextServer } from "./api";
import { Note } from "@/types/note";
import { User } from "@/types/user";
import { LoginResponse } from "@/types/login";
import { SessionResponse } from "@/types/session";
import { EditProfile } from "@/types/editProfile";

export const fetchNotes = async (
  page = 1,
  perPage = 10,
  tag: string | null = null,
  search: string = "",
) => {
  const res = await nextServer.get<NotesResponse>(`/notes`, {
    params: {
      page,
      perPage,
      tag: tag || undefined,
      search: search || undefined,
    },
  });
  return res.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const res = await nextServer.get<Note>(`/notes/${id}`, {});
  return res.data;
};

export const createNote = async (note: {
  title: string;
  content: string;
  tag: string;
}) => {
  const res = await nextServer.post<Note>(`/notes`, note, {});
  return res.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const res = await nextServer.delete<Note>(`/notes/${id}`, {});
  return res.data;
};

export const register = async (userData: {
  email: string;
  password: string;
}) => {
  const res = await nextServer.post<User>(`/auth/register`, userData);
  return res.data;
};

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const res = await nextServer.post<LoginResponse>(`/auth/login`, credentials);
  return res.data;
};

export const checkSession = async () => {
  const { data } = await nextServer.get<SessionResponse>(`/auth/session`);
  return data;
};

export const getMe = async () => {
  const { data } = await nextServer.get<User>(`/users/me`);
  return data;
};

export const logOut = async () => {
  const { data } = await nextServer.post<SessionResponse>(`/auth/logout`);
  return data;
};

export const updateMe = async (data: EditProfile) => {
  const res = await nextServer.patch<User>(`/users/me`, data);
  return res.data;
};
