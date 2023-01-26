type HeaderSidebarProps = {
  handleClickHeaderSidebar: () => void;
};

function HeaderSidebar({ handleClickHeaderSidebar }: HeaderSidebarProps) {
  return (
    <>
      <div
        id='layout-sidebar'
        className='fixed top-0 -left-full w-4/5 h-screen bg-base-200 shadow-md z-50 ease-in-out duration-300 md:relative md:w-auto md:h-auto md:top-0 md:left-0 md:rounded-lg md:hidden'
      >
        <div id='' className='p-5 flex flex-col gap-2'>
          <div className='font-bold text-xl mb-2'>Menu</div>
          <div>About</div>
          <div>Work</div>
          <div>Contact</div>
        </div>
      </div>
      <div
        id='layout-overlay'
        className='top-0 z-40 w-screen h-screen bg-black fixed opacity-30 hidden'
        onClick={handleClickHeaderSidebar}
      ></div>
    </>
  );
}

export default HeaderSidebar;
