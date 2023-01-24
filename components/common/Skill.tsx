import Image, { StaticImageData } from 'next/image';

type SkillProps = {
  image: StaticImageData;
  name: string;
  description: string;
};

function Skill({ image, name, description }: SkillProps) {
  return (
    <div className='flex flex-col items-center'>
      <Image src={image} alt='image_placeholder' className='w-44' />
      <div className='font-bold text-2xl my-3'>{name}</div>
      <div className='w-4/5 text-center text-lg'>{description}</div>
    </div>
  );
}

export default Skill;
