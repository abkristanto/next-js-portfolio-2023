import Image from 'next/image';

function About() {
  return (
    <>
      <div className='bg-secondary text-secondary-content'>
        <div className='container mx-auto p-5'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col'>
              <div className='font-bold'>Abraham Kristanto</div>
              <div>Software Engineer</div>
              <div>Trainer</div>
            </div>
            <div className='flex flex-col'>
              <div className='font-bold'>Bio:</div>
              <div>
                Currently a software engineer at Sea. Worked at Grab, Kompas,
                for a while. Aspiring network security engineer
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>About Page</div>
    </>
  );
}

export default About;
