"use client";

import React from "react";
import Link from "next/link";
import { LiquidButton } from "@/components/Footer/footerbutton";

export const AboutButton = () => {
  return (
    <Link href='/about'>
      <LiquidButton>About Us</LiquidButton>
    </Link>
  );
};
