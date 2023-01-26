import useScrollPosition from '@/hooks/ScrollPosition';
import Link from 'next/link';
import { CgMenuGridO } from 'react-icons/cg';
import { HeaderSidebar } from './index';

function Header() {
  const scrollPosition = useScrollPosition();

  const handleClickHeaderSidebar = () => {
    const layoutSidebarEl = document.getElementById('layout-sidebar');
    layoutSidebarEl?.classList.toggle('-left-full');
    layoutSidebarEl?.classList.toggle('left-0');
    const layoutOverlayEl = document.getElementById('layout-overlay');
    layoutOverlayEl?.classList.toggle('hidden');
  };

  return (
    <>
      <nav
        className={`flex sticky top-0 p-5 w-full justify-between transition-all duration-100 z-50 ${
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
          <Link href='/about' scroll={false}>
            <div className='hover:text-primary cursor-pointer'>About</div>
          </Link>
          <Link href='/work'>
            <div className='hover:text-primary cursor-pointer'>Work</div>
          </Link>
          <Link href='/contact'>
            <div className='hover:text-primary cursor-pointer'>Contact</div>
          </Link>
        </div>
        <div className='block md:hidden' onClick={handleClickHeaderSidebar}>
          <CgMenuGridO size={25} />
        </div>
      </nav>
      <HeaderSidebar handleClickHeaderSidebar={handleClickHeaderSidebar} />
    </>
  );
}

export default Header;
