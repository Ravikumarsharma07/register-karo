import { Facebook, Instagram, Linkedin, X } from "lucide-react";


const FooterLinks = ({ text, url }) => {
  return <a href={url} className="md:text-[15px] tracking-wide my-1 font">{text} </a>;
};


const Socials = () => {
    return(
        <div className="flex gap-5 ">
        <a href="#">
          <Instagram style={{fontSize:"3rem", color:"white"}} className="hover:scale-110 max-sm:scale-90" />
        </a>
        <a href="#">
          <Facebook style={{fontSize:"2.9rem", color:"white"}} className="hover:scale-110 max-sm:scale-90"  />
        </a>
        <a href="#">
          <Linkedin style={{fontSize:"3.2rem", color:"white"}} className="hover:scale-110 max-sm:scale-90"  />
        </a>
      </div>
    )
}
 

const Subheading = ({ text }) => {  
  return <h3 className="text-[16px] h-10 text-yellow-600 font-semibold mb-3 md:mb-5">{text}</h3>;
};

const Footer = () => {
  return (
    <section className="border-white-500 border-t-2 bg-dark-blue ">
      <div className="flex max-md:flex-wrap gap-10 lg:gap-0 justify-between h-max bg-dark-blue py-10 padding-x">
        <div className="flex flex-col max-sm:pr-4 md:w-[30%]">
          <p className="text-[18px] text-[#d4d3d3] my-5">Design outstanding interfaces with advanced figma features in a matter of minutes</p>
          <Socials />
        </div>


        <div className="grid max-sm:gap-y-12 grid-cols-2 sm:grid-cols-4 gap-5 md:justify-items-end">
          <div className="flex flex-col text-cyan-50">
            <Subheading text={"START A BUSINESS"} />
            <FooterLinks text="How it works" url="#" />
            <FooterLinks text="Why Us" url="#" />
            <FooterLinks text="FAOs" url="#" />
            <FooterLinks text="Blogs" url="#" />
          </div>

          <div className="flex flex-col text-cyan-50">
          <Subheading text={"GOVERNMENT REGISTERATION"} />
            <FooterLinks text="How it works" url="#" />
            <FooterLinks text="Why Us" url="#" />
            <FooterLinks text="FAOs" url="#" />
            <FooterLinks text="Blogs" url="#" />
          </div>
          <div className="flex flex-col text-cyan-50">
          <Subheading text={"COMPLIANCE & TAXES"} />

            <FooterLinks text="Terms & Conditions" url="#" />
            <FooterLinks text="Privacy Policy" url="#" />
            <FooterLinks
              text="Refund & cancellation"
              url="#"
            />
            <FooterLinks text="Shipping Policy" url="shipping-policy" />
          </div>

          <div className="flex flex-col text-cyan-50">
          <Subheading text={"BIS & CDSCO"} />

            <FooterLinks text="Brand Story" url="#" />
            <FooterLinks
              text="About Us"
              url="#"
            />
            <FooterLinks text="Contact Us" url="/Contact-us" />
            <FooterLinks text="hello@registerkaro.com" url="#" />
            <FooterLinks text="8920878094" url="tel:+91 8920878094" />
          </div>
        </div>
      </div>
      <h3 className="h-max py-12 md:py-20 flex-center tracking-wide text-[#acacac] text-[16px]  ">
        Copyright © 2024 RegisterKaro | All Rights Reserved
      </h3>
    </section>
  );
};


export default Footer;