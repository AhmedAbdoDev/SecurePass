"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PasswordStrengthChecker from "@/components/PasswordStrengthChecker";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PasswordStrengthChecker />
      <Footer />
    </div>
  );
}
