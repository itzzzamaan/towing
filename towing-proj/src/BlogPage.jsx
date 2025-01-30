import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from "react-router-dom";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Post Status",
      description:
        "Shoulder Flank Turducken Sirloin Venison Picanha Corned",
      image:
        "https://images.unsplash.com/photo-1673187139233-a574680b06f6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: " Emma John",
      date: "July 12, 2022",
    },
    {
      id: 2,
      title: "Corned  Belly Brisket Tri-tip Rump",
      description:
        "Bresaola t-bone bacon ribeye frankfurter swine sausage beef shank. Spare ribs swine fatback...",
      image:
        "https://plus.unsplash.com/premium_photo-1737114947910-de4c8aa3c0e2?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: " Olivia Smith",
      date: "June 15, 2022",
    },
    {
      id: 3,
      title: "Shoulder Salami Spare Ribs Doner Drumstick",
      description:
        "Bresaola t-bone bacon ribeye frankfurter swine sausage beef shank. Spare ribs swine fatback...",
      image:
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: " Michael Johnson",
      date: "May 20, 2022",
    },
    {
      id: 4,
      title: "Burgdoggen Andouille Turducken Kielbasa",
      description:
        "Chuck pork chop salami kielbasa, Kielbasa capicola chicken ground round leberkas.",
      image:
        "https://images.unsplash.com/photo-1673187139211-1e7ec3dd60ec?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: " Sarah Brown",
      date: "April 18, 2022",
    },
    {
      id: 5,
      title: "A post related to the t-bone",
      description:
        "Bresaola t-bone bacon ribeye frankfurter swine sausage beef shank. Spare ribs swine fatback....",
      image:
        "https://images.unsplash.com/photo-1575012851088-b13e0fb1527c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: " Emily Davis",
      date: "March 25, 2022",
    },
    {
      id: 6,
      title: "We provide highest quality towing services",
      description:
        "Cow salami hamburger biltong, meatball tongue leberkas fatback pig pork capicola pastrami ribeye.",
      image:
        "https://images.unsplash.com/photo-1678285287377-c10366e9dd40?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: " Michael Johnson",
      date: "February 12, 2022",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const location=useLocation()
  const isHome = location.pathname === '/'
  const isBlog = location.pathname === '/blog'
 


  return (
    <div className="p-8  h-full bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">
        {isHome && 'Our Blogs'  }   <br />
        {isBlog && 'Top posts'  }   <br />
        <span className="hover:text-yellow-400 text-sm mt-0">
          {isHome && 'anywhere, anytime towing'}
        </span>
      </h1>

      <div className="overflow-hidden max-w-6xl mx-auto">
        <Slider {...settings}>
          {blogs.map((blog) => (
            <div key={blog.id} className="p-4 gap-4">
            <div className="bg-white shadow rounded-3xl overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-72 object-cover rounded-t-lg transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 line-clamp-1">{blog.title}</h2>
                <p className="text-gray-600 line-clamp-2">{blog.description}</p>
                {isBlog && <p className="text-gray-600 mt-3 font-bold line-clamp-2">{blog.date}</p>  } 
                {isBlog && <p className=" mt-2 text-yellow-400 line-clamp-2">{blog.name}</p>  } 
              </div>
            </div>
          </div>
          
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogPage;
