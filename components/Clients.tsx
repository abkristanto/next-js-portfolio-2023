import Client from './common/Client';

function Clients() {
  return (
    <div className='py-16'>
      <div className='text-center text-3xl font-bold mb-8'>Clients</div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
        <Client />
        <Client />
        <Client />
      </div>
    </div>
  );
}

export default Clients;
