import Image from 'next/image';
import { Google, Apple, Awwwards, Behance, Dribbble } from '../assets';

function Logos() {
  return (
    <>
      <div className='flex justify-center gap-5 md:justify-between my-8 flex-wrap items-center md:flex-nowrap'>
        <div>
          <Image src={Google} alt='google' />
        </div>
        <div>
          <Image src={Apple} alt='google' />
        </div>
        <div>
          <Image src={Awwwards} alt='google' />
        </div>
        <div>
          <Image src={Behance} alt='google' />
        </div>
        <div>
          <Image src={Dribbble} alt='google' />
        </div>
      </div>
      <div className='border-1 w-full h-1 bg-neutral my-2'></div>
    </>
  );
}

export default Logos;
