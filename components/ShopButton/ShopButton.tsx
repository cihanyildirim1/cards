"use client";

import { DottedSurface } from "@/components/ShopButton/dotted";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ShopButton/button/star-button";

export default function DemoOne() {
  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#000",
        padding: "0 20px 40px",
        overflow: "hidden",
        marginTop: "-600px",
      }}
    >
      <div
        style={{
          marginTop: "120px",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        <Button />
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "100%",
          height: "100px",
          position: "relative",
        }}
      >
        <DottedSurface className='size-full'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div
              aria-hidden='true'
              className={cn(
                "pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full",
                "bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]",
                "blur-[30px]",
              )}
            />
          </div>
        </DottedSurface>
      </div>
    </section>
  );
}
