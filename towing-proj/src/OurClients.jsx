
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const testimonials = [
  {
    name: "Lulu Russell",
    role: "Director",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    quote:
      "Meatloaf laborum velit kielbasa. Drumstick sirloin lorem chicken swine biltong in short ribs duis bresaola. Veniam meatloaf cow incididunt in bacon kevin in pork belly ball tip duis ipsum."
  },
  {
    name: "John Doe",
    role: "Manager",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero id lacus scelerisque vehicula. Vivamus consectetur quam ut orci tristique, vitae facilisis nisl feugiat."
  },
  {
    name: "Emily Smith",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote:
      "Suspendisse potenti. Donec ullamcorper, sapien non tincidunt vehicula, ex mi vehicula lacus, id tincidunt magna erat eu elit. Duis venenatis metus et lectus volutpat, ac ullamcorper lorem pretium."
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
                <p className="italic mt-4 w-[80%] m-auto text-gray-300">{testimonial.quote}</p>
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
