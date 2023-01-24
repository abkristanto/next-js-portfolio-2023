import Image from 'next/image';
import { WorkPlaceholder } from '@/assets';
import Work from './common/Work';

function LatestWork() {
  return (
    <div>
      <div className='text-center text-3xl font-bold pb-16'>My Latest Work</div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
        <Work />
        <Work />
        <Work />
        <Work />
        <Work />
        <Work />
        <Work />
        <Work />
      </div>
    </div>
  );
}

export default LatestWork;
