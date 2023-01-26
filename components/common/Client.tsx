import { Rating } from 'react-daisyui';
import Image, { StaticImageData } from 'next/image';

type ClientProps = {
  comment: string;
  name: string;
  company: string;
  rating: number;
  image: StaticImageData;
};

function Client({ comment, name, company, rating, image }: ClientProps) {
  return (
    <div className='border-2 border-neutral bg-base-200 p-5 h-80 flex flex-col justify-between'>
      <div>{comment}</div>
      <div className='flex items-center'>
        <Image
          src={image}
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
          <div>
            {name}, {company}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
