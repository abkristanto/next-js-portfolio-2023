import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

type SkillProps = {
  image: StaticImageData;
  name: string;
  description: string;
};

function Skill({ image, name, description }: SkillProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.1 }}
      className='flex flex-col items-center'
    >
      <Image src={image} alt='image_placeholder' className='w-44' />
      <div className='font-bold text-2xl my-3'>{name}</div>
      <div className='w-4/5 text-center text-lg'>{description}</div>
    </motion.div>
  );
}

export default Skill;
