"use client";

import React from "react";
import Link from "next/link";
import { LiquidButton } from "@/components/Footer/footerbutton";

export const Button = () => {
  return (
    <Link href='/shop'>
      <LiquidButton>Shop Now</LiquidButton>
    </Link>
  );
};
