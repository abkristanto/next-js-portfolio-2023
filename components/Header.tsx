import Image from 'next/image';
import { HeaderImage } from '../assets';

function Header() {
  return (
    <>
      <div className='flex flex-wrap my-10 justify-between'>
        <div>
          <div className='font-bold'>Branding | Image making</div>
          <h1 className='text-6xl font-bold my-4'>My Awesome Portfolio</h1>
          <div className='text-xl'>
            My name is Abraham Kristanto, a full-stack developer from Indonesia.
          </div>
        </div>
        <Image src={HeaderImage} alt='header_image' />
      </div>
      <div className='border-1 w-full h-1 bg-neutral'></div>
    </>
  );
}

export default Header;
