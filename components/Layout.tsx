import useScrollPosition from '@/hooks/ScrollPosition';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  const scrollPosition = useScrollPosition();

  return (
    <div className='font-epilogue'>
      <nav
        className={`flex sticky top-0 p-5 w-full justify-between transition-all duration-100 ${
          scrollPosition > 0
            ? 'bg-base-100 text-base-content shadow-sm bg-opacity-80 backdrop-blur'
            : 'text-base-content'
        }`}
      >
        <div className='text-lg'>Abraham Kristanto</div>
        <div className='flex gap-4 text-lg'>
          <div>About</div>
          <div>Work</div>
          <div>Contact</div>
        </div>
      </nav>
      {children}
    </div>
  );
}

export default Layout;
