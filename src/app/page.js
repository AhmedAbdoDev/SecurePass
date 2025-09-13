"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PasswordStrengthChecker from "@/components/PasswordStrengthChecker";
import { useState } from "react";
import zxcvbn from "zxcvbn";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import MealChoose from "@/components/MealChoose";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PasswordStrengthChecker />
      <Footer />
    </div>
  );
}
