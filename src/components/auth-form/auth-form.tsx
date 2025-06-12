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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneRegex = /^09\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setError("فرمت شماره موبایل صحیح نیست (مثال: 09123456789)");
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
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      {error && <p className={styles.error}>{error}</p>}
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "در حال ورود..." : "ورود"}
      </Button>
    </form>
  );
}
