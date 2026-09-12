"use client";

import { useState } from "react";
import css from "./BookingForm.module.css";
import { postBookingRequest } from "@/lib/api/campers";

interface BookingFormProps {
  camperId: string;
}

export default function BookingForm({ camperId }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isNameInvalid = touched.name && !formData.name.trim();
  const isEmailInvalid =
    touched.email && (!formData.email.trim() || !formData.email.includes("@"));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({ name: true, email: true });

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.email.includes("@")
    ) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      await postBookingRequest(camperId, {
        name: formData.name,
        email: formData.email,
      });

      setSuccess(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={css.card}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      {success ? (
        <p className={css.success}>
          Thank you! Your booking has been successfully sent.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className={css.form} noValidate>
          <div
            className={`${css.fieldWrapper} ${isNameInvalid ? css.wrapperError : ""}`}
          >
            <div className={css.inputContainer}>
              <input
                type="text"
                placeholder="Name*"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                onBlur={() => setTouched({ ...touched, name: true })}
                className={`${css.input} ${isNameInvalid ? css.inputError : ""}`}
              />
              <label className={css.floatingLabel}>Name*</label>
              {isNameInvalid && (
                <svg className={css.errorIcon} width="24" height="24">
                  <use href="/icons.svg#icon-error" />
                </svg>
              )}
            </div>
            {isNameInvalid && (
              <span className={css.errorText}>Please enter your name.</span>
            )}
          </div>
          <div
            className={`${css.fieldWrapper} ${isEmailInvalid ? css.wrapperError : ""}`}
          >
            <div className={css.inputContainer}>
              <input
                type="email"
                placeholder="Email*"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                onBlur={() => setTouched({ ...touched, email: true })}
                className={`${css.input} ${isEmailInvalid ? css.inputError : ""}`}
              />
              <label className={css.floatingLabel}>Email*</label>
              {isEmailInvalid && (
                <svg className={css.errorIcon} width="24" height="24">
                  <use href="/icons.svg#icon-error" />
                </svg>
              )}
            </div>
            {isEmailInvalid && (
              <span className={css.errorText}>Please enter your email.</span>
            )}
          </div>

          {error && (
            <p style={{ color: "red", fontSize: "14px", margin: 0 }}>{error}</p>
          )}

          <button type="submit" className={css.button} disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      )}
    </div>
  );
}
