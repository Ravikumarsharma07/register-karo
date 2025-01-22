import { ArrowRightCircle } from 'lucide-react'
import React from 'react'

const ServicesCard = ({icon, heading, description, link, style}) => {
  return (
    <div className={`h-max py-8 px-2 flex-center-col gap-4 ${style}`}>
      {icon}
      <h3 className='text-2xl font-semibold text-center'>{heading}</h3>
      <p className='text-[16px] text-dark-blue text-center'>{description}</p>
      <a href={link} className='flex-center gap-2'>Learn more <ArrowRightCircle size={20} /></a>
    </div>
  )
}

export default ServicesCard
