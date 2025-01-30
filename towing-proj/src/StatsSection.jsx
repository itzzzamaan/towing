/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";

const StatsSection = () => {
  const [stats, setStats] = useState({
    experience: 0,
    offices: 0,
    vehicles: 0,
    workers: 0,
  });
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const duration = 2000;
    const increments = 50;
    const stepTime = duration / increments;

    const targetStats = {
      experience: 30,
      offices: 74,
      vehicles: 3720,
      workers: 874,
    };

    const step = {
      experience: targetStats.experience / increments,
      offices: targetStats.offices / increments,
      vehicles: targetStats.vehicles / increments,
      workers: targetStats.workers / increments,
    };

    if (inView) {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setStats((prevStats) => ({
          experience: Math.min(
            prevStats.experience + step.experience,
            targetStats.experience
          ),
          offices: Math.min(
            prevStats.offices + step.offices,
            targetStats.offices
          ),
          vehicles: Math.min(
            prevStats.vehicles + step.vehicles,
            targetStats.vehicles
          ),
          workers: Math.min(
            prevStats.workers + step.workers,
            targetStats.workers
          ),
        }));
        if (count >= increments) {
          clearInterval(interval);
        }
      }, stepTime);

      return () => clearInterval(interval);
    }
  }, [inView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-scroll bg-cover bg-center h-[70vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1660081516570-de4e4b3831fb?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-black/60 bg-opacity-70 w-full py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <div className="text-yellow-500 text-4xl sm:text-5xl md:text-6xl mb-2">
              ⭐
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {Math.floor(stats.experience)}
            </h2>
            <p className="text-sm sm:text-lg">Years of Experience</p>
          </div>

          <div>
            <div className="text-yellow-500 text-4xl sm:text-5xl md:text-6xl mb-2">
              🏢
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {Math.floor(stats.offices)}
            </h2>
            <p className="text-sm sm:text-lg">Offices Worldwide</p>
          </div>

          <div>
            <div className="text-yellow-500 text-4xl sm:text-5xl md:text-6xl mb-2">
              🚗
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {Math.floor(stats.vehicles)}
            </h2>
            <p className="text-sm sm:text-lg">Vehicles Towed</p>
          </div>

          <div>
            <div className="text-yellow-500 text-4xl sm:text-5xl md:text-6xl mb-2">
              👥
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {Math.floor(stats.workers)}
            </h2>
            <p className="text-sm sm:text-lg">Workers in Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
