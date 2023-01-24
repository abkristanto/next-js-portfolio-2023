import { Rating } from 'react-daisyui';
import { AuthorPlaceholder } from '@/assets';
import Image from 'next/image';

function Client() {
  return (
    <div className='border-2 border-neutral bg-base-100 p-5'>
      <div>
        This is a template Figma file, turned into code using Anima. Learn more
        at AnimaApp.com
      </div>
      <div className='flex items-center'>
        <Image
          src={AuthorPlaceholder}
          alt='author_placeholder'
          className='border-none mr-3'
        />
        <div className='flex flex-col'>
          <Rating value={5}>
            <Rating.Item className='mask mask-star' />
            <Rating.Item className='mask mask-star' />
            <Rating.Item className='mask mask-star' />
            <Rating.Item className='mask mask-star' />
            <Rating.Item className='mask mask-star' />
          </Rating>
          <div>Gemma Nolen, {' '} Google</div>
        </div>
      </div>
    </div>
  );
}

export default Client;
