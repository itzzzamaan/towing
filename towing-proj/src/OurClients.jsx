
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const testimonials = [
  {
    name: "Fazil Mohammad",
    role: "Reliable and Fast!",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
    quote:
      "I was stranded on the highway late at night, and they showed up within 20 minutes. Super friendly driver and great service. Highly recommend!"
  },
  {
    name: "Iqbal Khan",
    role: "Great Customer Service",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
    quote:
      "They were polite, professional, and explained everything clearly. My car was towed safely and quickly. Couldn't ask for more."
  },
  {
    name: "Falak Ahmed",
    role: "Professional and Courteous",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    quote:
      "From the first call to the drop-off, everything was smooth. The truck was clean, and the driver was very respectful."
  }
];

const OurClients = () => {
  return (
    <div className="bg-black h-full text-white py-10">
      <div className="max-w-4xl mx-auto px-4">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full border-4 border-yellow-500"
                  />
                </div>
                <p className="italic mt-4 w-[70%] md:w-[90%] md:text-lg text-sm m-auto text-gray-300">{testimonial.quote}</p>
                <h3 className="text-yellow-500 font-semibold mt-2">{testimonial.name}</h3>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurClients;
