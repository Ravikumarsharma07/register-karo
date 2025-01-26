import { BarChart4, LightbulbIcon } from "lucide-react";
import React from "react";
import { useState, useEffect, useRef } from "react";


const VideoIntro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
  
    if (videoRef.current) {
      observer.observe(videoRef.current); 
    }
  
    return () => {
      if (videoRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  

  return (
    <section className="bg-dark-blue grid grid-cols-1 lg:grid-cols-2  gap-12 lg:gap-0 text-white/95 py-12  padding-x">
      <div className="flex flex-col gap-4 max-md:text-center sm:px-10 md:p-0 md:pr-12">
        <h2 className="text-3xl lg:text-4xl font-semibold ">Our Video Introductions</h2>
        <p className="text-lg text-white/70">
          Welcome to our video introductions. Here, you will find a collection
          of videos that showcase our work and provide insights into our
          projects.
        </p>
        <div className="mt-6 grid grid-flow-col max-md:grid-flow-row max-md:justify-items-center max-md:text-center gap-5 items-center max-sm:px-4">
          <LightbulbIcon className="fill-white text-white bg-yellow-400 rounded-full p-3 w-12 h-12 lg:w-16 lg:h-16"/>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Explore ideas together</h3>
            <p>
              Our team of experts are here to help you explore ideas and find
              the best solutions for your projects.
            </p>
          </div>
        </div>
        <div className="mt-6 grid grid-flow-col max-md:grid-flow-row max-md:justify-items-center max-md:text-center gap-5 items-center max-sm:px-4">
          <BarChart4 className=" text-white bg-yellow-400 rounded-full p-3 w-12 h-12 lg:w-16 lg:h-16"   />
          <div className="md:pr-16">
            <h3 className="text-2xl font-semibold mb-2">Bring those ideas to life</h3>
            <p>
            Our team of experts are here to help you bring your ideas to life
            and make them a reality.
            </p>
          </div>
        </div>
        </div>
      <div ref={videoRef} className="max-sm:px-2 max-md:px-10">
          {isVisible && (
            <iframe
            className="h-[300px] sm:h-[400px]  md:h-[400px] lg:h-[400px] w-full rounded-xl"
          src="https://www.youtube.com/embed/Vkn4lec-sy0?si=rFSoy4MRE0ldqq1t"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          ></iframe>
          )}
      </div>
    </section>
  );
};

export default VideoIntro;
