import Skill from './common/Skill';
import { ImagePlaceholder } from '@/assets';

function Skills() {
  return (
    <div className='flex flex-col md:flex-row justify-evenly py-16 gap-3 md:py-44'>
      <Skill
        image={ImagePlaceholder}
        name='Product Design'
        description='This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com'
      />
      <Skill
        image={ImagePlaceholder}
        name='Art Direction'
        description='This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com'
      />
      <Skill
        image={ImagePlaceholder}
        name='Visual Design'
        description='This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com'
      />
    </div>
  );
}

export default Skills;
