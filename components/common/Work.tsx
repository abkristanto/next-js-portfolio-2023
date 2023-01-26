import { WorkPlaceholder } from '@/assets';
import Image, { StaticImageData } from 'next/image';

type WorkProps = {
  image: StaticImageData;
  name: string;
  description: string;
};

function Work() {
  return (
    <div className='flex flex-col items-center'>
      <Image src={WorkPlaceholder} alt='work-placeholder' className='' />
      <div className='font-bold text-lg mt-2'>Free Bird</div>
      <div>Jason Statham</div>
    </div>
  );
}

export default Work;
