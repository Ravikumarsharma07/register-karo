import React from "react";
import {
  ArrowRightCircle,
} from "lucide-react";
const AboutTeam = () => {
  return (
    <section id="about-us" className="relative h-max min-h-[100vh] flex max-md:flex-col justify-center items-center gap-10 padding-x ">
      {/* FIRST SECTION */}
      <div className="w-full max-lg:pt-10 lg:pb-8 lg:w-[55%] flex flex-col max-md:items-center gap-5">
        <p className="font-semibold text-[17px] text-orange-400 ">
          WELCOME TO REGISTERKARO.IN
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl max-md:text-center font-bold ">
          About <span className="text-orange-500">Register Karo</span>
        </h2>
        <p className="max-md:text-center max-md:w-[70%]">
          We have been using Intelegencia as our DevOps vendor for our field
          service applications over the last couple of years and I’m extremely
          pleased with their performance, ability to execute, and willingness to
          adapt in our ever changing environment. Perry is an outstanding leader
          who is fanatical about customer satisfaction. He has built a solid
          team which has consistently delivered on projects thereby exceeding
          everyone’s expectations.
        </p>
        <p className="max-md:text-center max-md:w-[70%]">
          I would strongly recommend their services to any organization that is
          looking for solid, reliable, and predictable outcomes. Learn More.
        </p>

        <div className="flex gap-2 mt-4">
          <button className="flex-center gap-2 bg-dark-blue hover:bg-blue-950 h-10 md:h-12  text-white px-4 md:px-8 text-lg rounded-sm">
            Learn more <ArrowRightCircle size={20} className="mt-1" />
          </button>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="w-full lg:w-[45%] p-16  md:p-0 lg:p-0 xl:p-0">
        <img
          src="/team.png"
          className="rounded-3xl md:h-[450px] w-full"
          alt="AboutTeam"
        />
      </div>
    </section>
  );
};

export default AboutTeam;
