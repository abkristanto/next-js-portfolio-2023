import Image from 'next/image';
import { Google, Apple, Awwwards, Behance, Dribbble } from '../assets';

function Logos() {
  return (
    <>
      <div className='flex justify-between my-8'>
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
