import DashboardClient from "@/components/dashboard/dashboard-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "داشبورد کاربری",
  description: "داشبورد کاربری شما برای مدیریت حساب.",
};

export default function DashboardPage() {
  return <DashboardClient />;
}
