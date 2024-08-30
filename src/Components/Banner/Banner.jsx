import BannerImage from '../../assets/banner.jpg';

function Banner() {
  return (
    <div className='relative'>
      <img
        src={BannerImage}
        alt='Banner'
        className='w-full h-[30rem] object-cover'
      />

      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4'>
        <div className='bg-black bg-opacity-70 p-6 rounded-lg'>
          <div className='font-semibold text-4xl md:text-5xl text-white mb-4'>
            Crypto Tracker
          </div>
          <div className='font-semibold text-white md:text-xl'>
          Explore Cryptocurrency Coin Data
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
