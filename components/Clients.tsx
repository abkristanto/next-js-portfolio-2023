import Client from './common/Client';
import { AuthorPlaceholder } from '@/assets';

function Clients() {
  return (
    <>
      <div className='py-16'>
        <div className='text-center text-3xl font-bold mb-8'>Clients</div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
          <Client
            comment='This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com'
            name='Gemma Nolen'
            company='Google'
            rating={5}
            image={AuthorPlaceholder}
          />
          <Client
            comment='This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com'
            name='Gemma Nolen'
            company='Google'
            rating={5}
            image={AuthorPlaceholder}
          />
          <Client
            comment='This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com'
            name='Gemma Nolen'
            company='Google'
            rating={5}
            image={AuthorPlaceholder}
          />
        </div>
      </div>
      <div className='border-1 w-full h-1 bg-neutral'></div>
    </>
  );
}

export default Clients;
