"use client";

import { useAuth } from "@/lib/store/authStore";
import css from "./EditProfilePage.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateMe } from "@/lib/api/clientApi";
import Image from "next/image";
import { User } from "@/types/user";

export default function EditProfilePage() {
  const { user, setAuth } = useAuth();
  const [username, setUsername] = useState(user?.username || "");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      const editUser = await updateMe({
        email: user.email,
        username: username,
      });

      const fullUser: User = {
        ...user,
        username: editUser.username,
      };

      setAuth(fullUser);

      router.push("/profile");
    } catch (error) {
      console.error("Failed to edit profile:", error);
    }
  };

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <h1 className={css.formTitle}>Edit Profile</h1>

        <Image
          src={user?.avatar || "/default-avatar.png"}
          alt="User Avatar"
          width={120}
          height={120}
          className={css.avatar}
        />

        <form className={css.profileInfo} onSubmit={handleSubmit}>
          <div className={css.usernameWrapper}>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              className={css.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <p>Email:{user?.email}</p>

          <div className={css.actions}>
            <button type="submit" className={css.saveButton}>
              Save
            </button>
            <button
              type="button"
              className={css.cancelButton}
              onClick={() => router.back()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
