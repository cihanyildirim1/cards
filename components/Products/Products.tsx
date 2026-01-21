"use client";

import { Instagram, Chrome, Globe, Wand2, ArrowLeft } from "lucide-react";
import { GlowingEffect } from "@/components/Products/glowing-effect";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function GlowingEffectDemo() {
  return (
    <div className='max-w-6xl mx-auto px-4 py-8 bg-black min-h-screen'>
      <div className='mb-8'>
        <Link
          href='/'
          className='inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors'
        >
          <ArrowLeft className='h-5 w-5' />
          <span className='text-lg font-semibold'>Back Home</span>
        </Link>
      </div>
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-6 list-none'>
        <GridItem
          icon={<Instagram className='h-6 w-6' />}
          title='Instagram Card'
          description='Your Instagram, one tap away.'
          price='$24.99'
        />
        <GridItem
          icon={<Chrome className='h-6 w-6' />}
          title='Review Card'
          description='Google Review. One tap.'
          price='$24.99'
        />
        <GridItem
          icon={<Globe className='h-6 w-6' />}
          title='Website Card'
          description='Your Website, one tap away.'
          price='$24.99'
        />
        <GridItem
          icon={<Wand2 className='h-6 w-6' />}
          title='Custom Card'
          description='One card. Any destination.'
          price='$24.99'
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  price: string;
}

const GridItem = ({ icon, title, description, price }: GridItemProps) => {
  return (
    <li className='h-[320px] w-full'>
      <div className='relative h-full rounded-[1.25rem] border-[0.75px] border-gray-700 p-2 md:rounded-[1.5rem] md:p-3'>
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className='relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.75px] border-gray-700 bg-black p-6 shadow-sm md:p-6'>
          <div className='relative flex flex-1 flex-col justify-between gap-3'>
            <div className='w-fit rounded-lg border-[0.75px] border-gray-700 bg-gray-900 p-3 text-white'>
              {icon}
            </div>
            <div className='space-y-3'>
              <h3 className='pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white'>
                {title}
              </h3>
              <p className='font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-400'>
                {description}
              </p>
            </div>
          </div>
          <div className='pt-2 border-t border-gray-800'>
            <span className='text-2xl font-bold text-white'>{price}</span>
          </div>
        </div>
      </div>
    </li>
  );
};
