import AuthForm from "@/components/auth-form/auth-form";
import styles from "./auth.module.scss";

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
