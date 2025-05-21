import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const HeroSlider = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co/r2cCNNmk/devshri-chatterji20180128134028494.jpg"
              className="w-full h-full object-cover"
              alt="Slide 1"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Welcome to <span className='text-blue-400'>Recipe Book</span> Website</h2>
                <p className="text-2xl md:text-xl">Discover amazing recipe that help you to cooking tasty items.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co/mFy0Hv7W/One-pan-spaghetti-f2aca14.jpg"
              className="w-full h-full object-cover"
              alt="Slide 2"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">New Taste Is Waiting For You</h2>
                <p className="text-2xl md:text-xl">Join us on a journey of taste.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://i.ibb.co/bj2gfDSv/turkish-pistachio-baklava-big.webp"
              className="w-full h-full object-cover"
              alt="Slide 3"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Connect With Us</h2>
                <p className="text-2xl md:text-xl">Stay ahead with Recipe Book.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;