import { Footer } from "@/components/Footer/footer-section";
import { LiquidButton } from "@/components/Footer/footerbutton";
import Link from "next/link";

export default function DemoOne() {
  return (
    <div className='relative flex min-h-svh flex-col'>
      <div className='min-h-screen flex items-center justify-center'>
        <div className='absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-[calc(50%+250px)] flex gap-6'>
          <Link href='/about'>
            <LiquidButton>About Us</LiquidButton>
          </Link>
          <Link href='/contact'>
            <LiquidButton>Contact Us</LiquidButton>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
