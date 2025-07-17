'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="w-full py-4 px-8 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" width={100} height={100} className="h-22 w-22" />
          <span className="font-bold text-xl">FeelFreeVPN</span>
        </Link>
      </div>
      <nav className="flex gap-6 hover:cursor-pointer">
        {pathname !=='/install' && <Link href="/install" className="flex gap-2">
          <span className="text-xl transition">Install</span>
          <svg className="scale-120 mt-[1px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 3V15M12 15L8 11M12 15L16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 19H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      }
      </nav>
    </header>
  );
};

export default Header;
