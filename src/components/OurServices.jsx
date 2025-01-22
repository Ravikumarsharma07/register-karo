import React from 'react'
import ServicesCard from './smallComponents/ServicesCard'
import { Database, Laptop2Icon, LayoutDashboard, LucideMonitorSpeaker, ShoppingCart, Users } from 'lucide-react'


const OurServices = () => {

    const Services = [
        {
            icon: <LayoutDashboard size={80} className='text-orange-400' />,
            heading:"Company Formation",
            description:"Build web-based solutions that enhance customer experience.",
            link:"#",
            style:"sm:border-r border-black"
        },
        {
            icon: <Laptop2Icon size={80} className='text-orange-400' />,
            heading:"Company Secretarial Services",
            description:"Build web-based solutions that enhance customer experience.",
            link:"#",
            style:"lg:border-r border-black"
        },
        {
            icon: <Users size={80} className='text-orange-400' />,
            heading:"Virtual Office Address",
            description:"Build web-based solutions that enhance customer experience.",
            link:"#",
            style:"sm:border-r lg:border-none border-black"

        },
        {
            icon: <Database size={80} className='text-orange-400' />,
            heading:"Annual Compliance Services",
            description:"Build web-based solutions that enhance customer experience.",
            link:"#",
            style:"lg:border-r border-black"
        },
        {
            icon: <ShoppingCart size={80} className='text-orange-400' />,
            heading:"Payroll Services",
            description:"Build web-based solutions that enhance customer experience.",
            link:"#",
            style:"sm:border-r border-black"
        },
        {
            icon: <LucideMonitorSpeaker size={80} className='text-orange-400' />,
            heading:"Bookkeeping Services",
            description:"Build web-based solutions that enhance customer experience.",
            link:"#"
        },
    ]


  return (
    <section className='padding-x py-16 flex-center-col bg-[#FAFAFA]'>
        <p className='text-lg text-orange-400'>WELCOME TO REGISTERKARO.IN</p>
        <h2 className='text-3xl font-semibold py-6'>Explore Our Services</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 mt-10'>
            {Services.map((service, index) => (
                <ServicesCard key={index} {...service} />
            ))}
        </div>

        <button className="bg-dark-blue hover:bg-blue-950 h-10 mt-10 md:h-12  text-white px-4 md:px-8 text-lg rounded-sm">
            See All Services
          </button>
    </section>
  )
}

export default OurServices
