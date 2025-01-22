import {
  AlarmClockCheckIcon,
  ClockArrowUpIcon,
  LucideBrain,
  LucideShieldCheck,
  SquareAsterisk,
} from "lucide-react";
import React from "react";
import WhyUsCard from "./smallComponents/WhyUsCard";

const WhyUs = () => {
  const whyUs = [
    {
      icon: (
        <LucideShieldCheck
          size={60}
          strokeWidth={2}
          className="text-orange-500"
        />
      ),
      heading: "Confidential and Secure",
      detail: "All your private information is safe with us.",
      style: "bg-orange-700/20",
    },
    {
      icon: (
        <LucideBrain size={60} strokeWidth={2} className="text-green-500" />
      ),
      heading: "Affordable Price",
      detail: "We offer our services at an affordable price to our clients.",
      style: "bg-green-700/20",
    },
    {
      icon: (
        <SquareAsterisk size={60} strokeWidth={2} className="text-blue-500" />
      ),
      heading: "Customer Satisfaction",
      detail: "We are committed to provide quality services   to our clients.",
      style: "bg-blue-700/20",
    },
    {
      icon: (
        <AlarmClockCheckIcon
          size={60}
          strokeWidth={2}
          className="text-pink-500"
        />
      ),
      heading: "24/7 Support",
      detail: "We are available 24/7 to support our clients.",
      style: "bg-pink-700/20",
    },
    {
      icon: (
        <ClockArrowUpIcon
          size={60}
          strokeWidth={2}
          className="text-yellow-500"
        />
      ),
      heading: "Experienced Team",
      detail: "Our team is highly experienced and skilled.",
      style: "bg-yellow-700/20",
    },
  ];
  return (
      <div className="grid items-center justify-items-center md:justify-items-end grid-cols-2 md:grid-cols-custom gap-x-8 gap-y-4  h-max min-h-[100vh] padding-x py-16">
        <div className=" flex flex-col max-md:items-center gap-4 pb-10 max-md:col-span-2">
          <p className="font-semibold text-[17px] text-orange-400 ">
            WHY TO REGISTERKARO.IN
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl max-md:text-center font-bold ">
            Why Choose Register Karo
          </h2>
          <p className="max-md:text-center max-md:w-[70%]">
            It is with consistent services and results that build trust with the
            people and that in turn help us to serve the business better.
          </p>
        </div>

        {whyUs.map((item, index) => (
          <WhyUsCard key={index} {...item} />
        ))}
      </div>
  );
};

export default WhyUs;
