import React from 'react'

const WhyUsCard = ({icon, heading, detail, style}) => {
  return (
        <div className={`flex-center-col gap-3 py-10 px-2 ${style} h-60 w-60 lg:h-64 lg:w-64 rounded-xl`}>
      {icon}
      <h3 className='text-xl font-semibold'>{heading}</h3>
      <p className='text-center text-[#484848]'>{detail}</p>
    </div>
  )
}

export default WhyUsCard
