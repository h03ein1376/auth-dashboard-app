"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import Input from "../ui/input/input";
import Button from "../ui/button/button";
import styles from "./auth-form.module.scss";

export default function AuthForm() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const { login, user, isLoading, isChecking } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
  }, [user, router]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const digitsOnly = value.replace(/[^0-9]/g, "");
    const limitedDigits = digitsOnly.slice(0, 11);
    setPhone(limitedDigits);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length !== 11 || !phone.startsWith("09")) {
      setError("شماره موبایل باید با 09 شروع شود و 11 رقم باشد.");
      return;
    }
    setError("");
    login();
  };
  if (isChecking) {
    return <p>در حال بررسی...</p>;
  }

  if (user) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="tel"
        dir="ltr"
        placeholder="09123456789"
        value={phone}
        disabled={isLoading}
        onChange={handlePhoneChange}
        required
        maxLength={11}
      />
      {error && <p className={styles.error}>{error}</p>}
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "در حال ورود..." : "ورود"}
      </Button>
    </form>
  );
}
