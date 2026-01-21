"use client";
import React from "react";
import { BackgroundBeams } from "@/components/Contact/background";
import { Input } from "@/components/Contact/input";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LiquidButton } from "@/components/Footer/footerbutton";

function BackgroundBeamsDemo() {
  return (
    <div className='min-h-screen w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased py-12'>
      <div className='max-w-2xl mx-auto p-4 w-full'>
        <div className='mb-8 relative z-10 -ml-[300px]'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors'
          >
            <ArrowLeft className='h-5 w-5' />
            <span className='text-lg font-semibold'>Back to Home</span>
          </Link>
        </div>

        <h1 className='relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300 text-center font-sans font-bold'>
          Contact Us
        </h1>
        <p className='text-gray-400 max-w-lg mx-auto my-6 text-sm text-center relative z-10'>
          Get in touch with us. We&apos;d love to hear from you and help you
          with your needs.
        </p>

        <div className='space-y-4 relative z-10'>
          <Input
            type='text'
            placeholder='Your Name'
            className='w-full bg-black border-zinc-700 text-white placeholder:text-zinc-400'
          />
          <Input
            type='email'
            placeholder='Your Email'
            className='w-full bg-black border-zinc-700 text-white placeholder:text-zinc-400'
          />
          <textarea
            placeholder='Your Message'
            rows={6}
            className='w-full px-4 py-3 rounded-lg bg-black border border-zinc-700 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all'
          />
          <div className='flex justify-center'>
            <LiquidButton className='px-8'>Send Message</LiquidButton>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export { BackgroundBeamsDemo };
