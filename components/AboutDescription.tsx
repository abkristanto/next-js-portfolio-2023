import { ProfilePlaceholder } from "@/assets";
import Image from "next/image";

function AboutDescription() {
  return (
    <div className='bg-[#F9E6F0]'>
      <div className='container mx-auto p-12'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='flex flex-col items-center'>
            <div>
              <Image
                src={ProfilePlaceholder}
                alt='profile_placeholder'
                className='mb-3'
              />
              <div className='font-bold'>Abraham Kristanto</div>
              <div>Software Engineer</div>
              <div>Trainer</div>
            </div>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='font-bold'>Bio:</div>
            <div>
              Currently a software engineer at Sea. Worked at Grab, Kompas, with
              total experience of 2 years. Graduated Computer Engineering at
              University of Indonesia in 2022.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDescription;
