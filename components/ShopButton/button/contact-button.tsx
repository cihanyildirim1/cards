"use client";

import React from "react";
import Link from "next/link";
import { LiquidButton } from "@/components/Footer/footerbutton";

export const ContactButton = () => {
  return (
    <Link href='/contact'>
      <LiquidButton>Contact Us</LiquidButton>
    </Link>
  );
};
