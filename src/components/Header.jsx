import {
  Facebook,
  Instagram,
  Mail,
  Menu,
  PhoneCall,
  Search,
  Twitter,
  X,
} from "lucide-react";
import React, { useState } from "react";

const Header = () => {
  const links = [
    { linkName: "Home", url: "/" },
    { linkName: "Our Services", url: "/" },
    { linkName: "Blog", url: "/" },
    { linkName: "Contact Us", url: "/" },
    { linkName: "About Us", url: "/" },
  ];

  const subLinks = [
    {
      linkName: "www.registerkaro.in",
      icon: <Mail />,
      url: "http://registerkaro.in",
      style: "border-r-2  border-white pr-2 sm:pr-4 md:pr-7",
    },
    {
      linkName: "+91 8447746183",
      icon: <PhoneCall />,
      url: "tel: +918447746183",
      style: "border-r-2  border-white pr-2 sm:pr-4 md:pr-7",
    },
    { linkName: <Instagram />, icon: "", url: "#" },
    { linkName: <Facebook />, icon: "", url: "#" },
    { linkName: <Twitter />, icon: "", url: "#" },
  ];

  const [isVisble, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisble);
  };

  return (
    <header className="sticky top-[-2.5rem] z-50 bg-white">
      {/* sub header  */}
      <div className="h-[2.2rem] md:h-10 flex justify-end items-center padding-x  bg-dark-blue text-end text-sm md:text-lg text-white">
        <nav>
          <ul className="flex-center gap-2 md:gap-4">
            {subLinks.map((link, index) => (
              <li key={index} className={`inline-block ${link.style} `}>
                <a
                  href={link.url}
                  className="flex-center gap-[1px] sm:gap-2 text-sm"
                >
                  {link.icon}
                  {link.linkName}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex justify-between items-center py-2 padding-x">
        <h1 className="flex-center text-dark-blue text-xl md:text-2xl font-bold">
          <img
            className="scale-[1.5] md:scale-[2]"
            src="/logo.webp"
            alt="RegisterKaro"
          />
          Register<span className="text-yellow-500">Karo</span>{" "}
        </h1>

        <nav className="flex-center gap-4">

          {/* for bigger screens */}
          <ul className="flex-center gap-3 lg:gap-8 max-md:hidden">
            {links.map((link) => (
              <li
                key={link.linkName}
                className="font-semibold text-[#3f3f3f] text-center hover:text-black"
              >
                <a href={link.url}>{link.linkName}</a>
              </li>
            ))}
            <Search
              className="cursor-pointer font-semibold text-[#363636] text-center hover:text-black"
              size={32}
            />
          </ul>

          {/* for smaller screens */}
          <ul className={`absolute top-0 left-0 w-full h-[350px] bg-pink-200/90 custom-gradient flex-col justify-center items-center gap-5 ${isVisble ? "flex" : "hidden"}`}>
            <X size={27} onClick={handleClick} className="cursor-pointer absolute top-4 right-4"/>
            {links.map((link) => (
              <li
              onClick={handleClick}
                key={link.linkName}
                className="text-xl font-semibold text-center text-black"
              >
                <a href={link.url}>{link.linkName}</a>
              </li>
            ))}
            <Search
              className="cursor-pointer font-semibold text-[#363636] text-center hover:text-black"
              size={32}
            />
          </ul>

          <Menu size={40} onClick={handleClick} className="md:hidden"/>
        
          <button className="h-[2.5rem] px-2 lg:px-4 text-[15px] sm:text-lg text-white bg-orange-500/90 rounded-sm">
            Talk An Expert
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
