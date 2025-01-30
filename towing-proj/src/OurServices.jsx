import towing1 from './assets/towing1.png'
import hail from './assets/hail.png'
import flood from './assets/flood.png'
import accident from './assets/accident.png'
import fire from './assets/fire.png'
import motocycle from './assets/motocycle.png'

const services = [
    {
      image: towing1, 
      title: "Car Towing",
      description:
        "Duis laboris ball tip jowl sed. Drumstick leberkas tenderloin swine laborum cupim bacon ipsum jowl meatball t-bone.",
    },
    {
      image: hail,
      title: "Hail Damage",
      description:
        "Strip steak turkey prosciutto exercitation cillum elit. Enim ham velit aute jerky ras. Anim landjaeger andouille.",
    },
    {
      image: flood, 
      title: "Flood Insurance Coverage",
      description:
        "Shankle pastrami jerky spare ribs pancetta hamburger aute occaecat andouille corned beef quis capicola fugiat ea flank.",
    },
    {
      image: accident, 
      title: "Accident Insurance",
      description:
        "T-bone laborum esse tongue, consequat elit short ribs cow cupidatat sed fugiat fatback. Velit dolor frankfurter pork loin.",
    },
    {
      image: fire,
      title: "Fire Insurance",
      description:
        "Turkey turducken nulla pork chop shankle biltong ipsum mollit brisket non boudin. Frankfurter porchetta cow aliquip.",
    },
    {
      image: motocycle, 
      title: "Motorcycle Towing",
      description:
        "Bresaola pork consequat exercitation, voluptate pork loin brisket capicola officia incididunt ground round cupim.",
    },
  ];

  const OurServices = () => {
    return (
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            OUR <span className="text-yellow-500">SERVICES</span>
          </h2>
          <p className="text-gray-500 mb-12 text-sm sm:text-base">
            EMERGENCY ROADSIDE ASSISTANCE
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white  p-6 rounded-lg  transition duration-300"
              >
                <div className="flex justify-center items-center mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-contain  rounded-md"
                  />
                </div>
  
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  {service.title}
                </h3>
  
                <p className="text-gray-600 text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default OurServices;
  