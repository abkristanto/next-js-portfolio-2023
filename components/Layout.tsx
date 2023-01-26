import useScrollPosition from '@/hooks/ScrollPosition';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import LayoutSidebar from './LayoutSidebar';

function Layout({ children }: { children: React.ReactNode }) {
  const scrollPosition = useScrollPosition();

  const handleClickLayoutSidebar = () => {
    const layoutSidebarEl = document.getElementById('layout-sidebar');
    layoutSidebarEl?.classList.toggle('-left-full');
    layoutSidebarEl?.classList.toggle('left-0');
    const layoutOverlayEl = document.getElementById('layout-overlay');
    layoutOverlayEl?.classList.toggle('hidden');
  };

  return (
    <div className='font-epilogue'>
      <Head>
        <title>Abraham Kristanto Portfolio 2023</title>
        <meta
          name='description'
          content='Abraham Kristanto Portfolio Home Page'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav
        className={`flex sticky top-0 p-5 w-full justify-between transition-all duration-100 ${
          scrollPosition > 0
            ? 'bg-base-100 text-base-content shadow-sm bg-opacity-80 backdrop-blur'
            : 'text-base-content'
        }`}
      >
        <Link href='/'>
          <div className='text-xl ml-2 hover:text-primary cursor-pointer'>
            Abraham Kristanto
          </div>
        </Link>
        <div className='hidden md:flex gap-8 text-lg'>
          <Link href='/about'>
            <div className='hover:text-primary cursor-pointer'>About</div>
          </Link>
          <Link href='/work'>
            <div className='hover:text-primary cursor-pointer'>Work</div>
          </Link>
          <Link href='/contact'>
            <div className='hover:text-primary cursor-pointer'>Contact</div>
          </Link>
        </div>
        <div className='block md:hidden' onClick={handleClickLayoutSidebar}>
          <CgMenuGridO size={25} />
        </div>
      </nav>
      <LayoutSidebar handleClickLayoutSidebar={handleClickLayoutSidebar} />
      {children}
    </div>
  );
}

export default Layout;
