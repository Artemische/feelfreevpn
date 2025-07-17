import Link from 'next/link';
import React from 'react';

const InstallPage: React.FC = () => {
  return (
    <main className='w-[100vw] h-[60vh] py-8 px-12'>
      <h1 className='text-4xl mb-2'>How to install</h1>
      <p className='text-xl'>Choose your preferred VPN protocol before proceeding with the installation.</p>
      <div className='flex mt-4'>
        <div className='border-1 p-2 px-4 flex items-center rounded-md'>
          <img className='w-20 h-20' src='./wir.svg' alt='Wireguard' />
          <span>Wireguard</span>
        </div>
        <div className='w-8 h-8 my-auto mx-[20px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
        <div className='border-1 p-2 px-4 flex items-center rounded-md'>
          <span>Generate config using our <Link className='underline' href='https://t.me/FeelFreeVPNBot?start=web-wireguard'>tg bot</Link></span>
        </div>
        <div className='w-8 h-8 my-auto mx-[20px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
        <div className='border-1 p-2 px-4 flex items-center rounded-md'>
          <span>
            <Link className='underline' href="https://www.wireguard.com/install/" target='_blank'>Install oficial Wireguard app</Link> and import the config. 
          </span>
        </div>
      </div>
    </main>
  );
};

export default InstallPage;