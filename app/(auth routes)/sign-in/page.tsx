"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import css from "./SignInPage.module.css";
import { getMe, login } from "@/lib/api/clientApi";
import { useAuth } from "@/lib/store/authStore";

interface SignInFormData {
  email: string;
  password: string;
}

export default function SignInPage() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const setAuth = useAuth((state) => state.setAuth);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data: SignInFormData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    try {
      await login(data);

      const userData = await getMe();
      setAuth(userData);

      router.push("/profile");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Помилка входу");
      }
    }
  };

  return (
    <main className={css.mainContent}>
      <form className={css.form} onSubmit={handleSubmit}>
        <h1 className={css.formTitle}>Sign in</h1>

        <div className={css.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className={css.input}
            required
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className={css.input}
            required
          />
        </div>

        <div className={css.actions}>
          <button type="submit" className={css.submitButton}>
            Log in
          </button>
        </div>

        <p className={css.error}>{error}</p>
      </form>
    </main>
  );
}
