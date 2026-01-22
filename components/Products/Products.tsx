"use client";

import { Instagram, Chrome, Globe, Wand2, ArrowLeft } from "lucide-react";
import { GlowingEffect } from "@/components/Products/glowing-effect";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function GlowingEffectDemo() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 bg-black min-h-screen'>
      <div className='mb-8 sm:mb-12'>
        <Link
          href='/'
          className='inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors'
        >
          <ArrowLeft className='h-5 w-5' />
          <span className='text-base sm:text-lg font-semibold'>Back Home</span>
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-[900px] mx-auto'>
        <GridItem
          icon={<Instagram className='h-5 w-5' />}
          title='Instagram Card'
          description='Your Instagram, one tap away.'
          price='$24.99'
        />
        <GridItem
          icon={<Chrome className='h-5 w-5' />}
          title='Review Card'
          description='Google Review. One tap.'
          price='$24.99'
        />
        <GridItem
          icon={<Globe className='h-5 w-5' />}
          title='Website Card'
          description='Your Website, one tap away.'
          price='$24.99'
        />
        <GridItem
          icon={<Wand2 className='h-5 w-5' />}
          title='Custom Card'
          description='One card. Any destination.'
          price='$24.99'
        />
      </div>
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
    <div className='w-full aspect-[1.59/1]'>
      <div className='relative h-full rounded-lg sm:rounded-xl border border-gray-700/80 p-1.5 sm:p-2 bg-gradient-to-br from-gray-900 via-gray-950 to-black shadow-2xl hover:shadow-blue-500/30 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02] sm:hover:scale-[1.03] hover:-translate-y-1'>
        <GlowingEffect
          spread={30}
          glow={true}
          disabled={false}
          proximity={56}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className='relative flex h-full flex-row items-center gap-2 sm:gap-3 md:gap-4 overflow-hidden rounded-md sm:rounded-lg border border-gray-800/60 bg-gradient-to-br from-gray-950 via-black to-gray-950 px-3 py-3 sm:px-4 sm:py-3.5 md:px-5 md:py-4 shadow-inner backdrop-blur-sm'>
          <div className='flex-shrink-0 rounded-md sm:rounded-lg border border-gray-600/50 bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 p-2 sm:p-2.5 text-white shadow-lg'>
            {icon}
          </div>
          <div className='flex flex-1 flex-col justify-center gap-1 sm:gap-1.5'>
            <h3 className='text-sm sm:text-base leading-tight font-semibold font-sans tracking-tight text-white'>
              {title}
            </h3>
            <p className='font-sans text-[10px] sm:text-xs leading-relaxed text-gray-400'>
              {description}
            </p>
          </div>
          <div className='flex-shrink-0 border-l border-gray-700/60 pl-2.5 sm:pl-3 md:pl-4 ml-0.5 sm:ml-1'>
            <span className='text-base sm:text-lg font-bold text-white tracking-tight'>
              {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
