import React from "react";
import { Handshake, PlayCircle, Star, UserRound } from "lucide-react";
const Hero = () => {
  const achievements = [
    {
      icon: <Star size={40} strokeWidth="1px" />,
      title: "4.5+",
      description: "Google Rating",
    },
    {
      icon: <UserRound size={40} strokeWidth="1px" />,
      title: "17,000+",
      description: "Clients",
    },
    {
      icon: <Handshake size={40} strokeWidth="1px" />,
      title: "99.8%",
      description: "Connectivity",
    },
  ]; 

  const links = [
    {link:"Annual Compliance"},
    {link:"Payroll Services"},
    {link:"Company Formation"},
    {link:"Annual Compliance"},
  ]

  return (
    <section id="home" className="relative  h-max min-h-[90vh] flex max-lg:flex-col justify-center items-center gap-10 padding-x  bg-gradient-to-br from-white/30 via-pink-300/30  to-blue-400/30">
      
      {/* Links  */}
      <div className="absolute top-[530px] md:top-16 right-0 flex-center-col gap-4 lg:gap-7">
        {links.map((link,index) => (  
            <a href="#" key={link.link+index} className="h-10 w-44 md:h-12 md:w-52 px-3 flex items-center justify-start bg-[#fffafa] shadow-2xl hover:bg-yellow-100 rounded-l-xl">{link.link}</a>
        ))}
      </div>
      
      {/* FIRST SECTION */}
      <div className="w-full max-lg:pt-10 lg:pb-8 lg:w-1/2 flex flex-col max-md:items-center gap-5">
        <p className="flex items-center justify-start gap-1 font-semibold">
          <Star className=" fill-yellow-400" size={20} strokeWidth={0} /> Google
          Rating{" "}
          <Star
            className="bg-yellow-400 fill-white"
            size={17}
            strokeWidth={0}
          />
          <Star
            className="bg-yellow-400 fill-white"
            size={17}
            strokeWidth={0}
          />
          <Star
            className="bg-yellow-400 fill-white"
            size={17}
            strokeWidth={0}
          />
          <Star
            className="bg-yellow-400 fill-white"
            size={17}
            strokeWidth={0}
          />
          <Star
            className="bg-yellow-400 fill-white"
            size={17}
            strokeWidth={0}
          />
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl max-md:text-center font-bold  max-lg:w-[90%]">
          Google Rating Your trusted partner for{" "}
          <span className="text-orange-400">compliance</span> business needs
        </h2>
        <span className="h-[2px] w-16 bg-yellow-400"></span>
        <p className="max-md:text-center max-lg:w-[70%]">
          An online business compliance platform that helps entrepreneurs and
          other individuals with various, <b className="font-semibold">registrations</b>, <b className="font-semibold">tax filings</b>, and other
           <b className="font-semibold"> legal matters</b>.
        </p>

        {/* ACHIEVEMENTS CARDS  */}
        <div className="flex justify-start gap-2 sm:gap-5 md:gap-10 mt-4">
          {achievements.map((achievement) => (
            <div className="flex-center gap-0 sm:gap-2" key={achievement.title}>
              {achievement.icon}
              <span>
                <p className="font-bold text-lg sm:text-[1.2rem] leading-5 bg-gradient-to-br from-orange-500/90 to-blue-900 bg-clip-text text-transparent">
                  {achievement.title}
                </p>
                <p className="text-sm">{achievement.description}</p>
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          <button className="bg-dark-blue hover:bg-blue-950 h-10 md:h-12  text-white px-4 md:px-8 text-lg rounded-md">
            Talk An Expert
          </button>
          <button className="hover:border-black border-transparent border h-10 md:h-12  text-black px-4 md:px-8 text-lg rounded-md flex-center gap-2">
            <PlayCircle
              strokeWidth={1}
              className="fill-orange-500 rounded-full"
            />{" "}
            See how it works
          </button>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="w-full lg:w-1/2 p-16  md:p-0 lg:p-10 xl:p-16">
        <img src="/hero_image.webp" className="rounded-3xl md:h-[450px] w-full" alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
