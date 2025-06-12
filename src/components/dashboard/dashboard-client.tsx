"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import Button from "../ui/button/button";
import styles from "./dashboard.module.scss";

export default function DashboardClient() {
  const { user, isChecking, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isChecking && !user) {
      router.push("/auth");
    }
  }, [user, isChecking, router]);

  if (isChecking || !user) {
    return <div className={styles.loadingScreen}>در حال بارگذاری...</div>;
  }

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardBox}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={user.picture.large}
          alt="User Avatar"
          className={styles.avatar}
        />
        <h1>خوش آمدید!</h1>
        <p className={styles.welcomeMessage}>
          {`سلام ${user.name.first} ${user.name.last}`}
        </p>
        <p className={styles.email}>{user.email}</p>
        <Button onClick={logout} style={{ backgroundColor: "#f44336" }}>
          خروج از حساب
        </Button>
      </div>
    </div>
  );
}
