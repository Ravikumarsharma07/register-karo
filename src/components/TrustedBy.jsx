import React from 'react'

const TrustedBy = () => {

    const companies = [
        {
            name: "Amazon",
            logo: "budwiser.png"
        },
        {
            name: "Oracle",
            logo: "oracle.png"
        },
        {
            name: "microsoft",
            logo: "budwiser.png"
        },
        {
            name:"Samsumg",
            logo: "oracle.png"
        },
        {
            name: "budwiser",
            logo: "budwiser.png"
        },
        {
            name: "Amazon",
            logo: "oracle.png"
        },

    ]

  return (
    <section className='padding-x py-16 flex-center-col'>
        <h3 className='text-2xl font-semibold text-center'>Trusted By Over 100+ Startups and freelance business</h3>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 content-center gap-10 md:gap-20  mt-12'>
            {companies.map((company, index) => (
                <div key={index} className=''>
                    <img className='h-16 w-max object-contain' src={company.logo} alt={company.name} />
                </div>
            ))}

        </div>
    </section>
  )
}

export default TrustedBy
