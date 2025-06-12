import AuthForm from "@/components/auth-form/auth-form";
import styles from "./auth.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ورود و ثبت نام",
  description: "برای ورود به حساب کاربری خود، اطلاعات را وارد کنید.",
};

export default function AuthPage() {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authBox}>
        <h1>ورود به سیستم</h1>
        <p>برای ورود، شماره تلفن خود را وارد کرده و روی دکمه ورود کلیک کنید.</p>
        <AuthForm />
      </div>
    </div>
  );
}
