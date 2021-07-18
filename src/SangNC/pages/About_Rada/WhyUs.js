import React from 'react'

const WhyUs = () => {
    const reasons = [
        {
            icon: '/assets/images/RadaPage/batch_clock.png',
            title: 'save your time',
            desc: 'You don’t have to wait for instant booking! Rada allows sending your request immediately to the service providers near your location at the same time to choose the best readiness one.',
            color: '#e96656'
        },
        {
            icon: '/assets/images/RadaPage/batch_dollar-bill.png',
            title: 'transparent pricing',
            desc: 'Rada does not charge customer for the app using. Fees are the breakdown for onsite services; working labor and parts repair or replacement.',
            color: '#34d293'
        },
        {
            icon: '/assets/images/RadaPage/batch_smartphone.png',
            title: 'simple design',
            desc: 'We are hearing and change for simple UX design based on customers feedback, in case it may have occurred from end users to the services provider..',
            color: '#3ab0e2'
        },
        {
            icon: '/assets/images/RadaPage/batch_cogwheel.png',
            title: 'pro services',
            desc: 'Rada does not charge customer for the app using. Fees are the breakdown for onsite services; working labor and parts repair or replacement.',
            color: '#f7d861'
        },
    ]
    return (
        <section className="mx-auto max-w-screen-2xl">
            <div className="mx-24">
                <div className="text-center my-20 space-y-2">
                    <h1 className="uppercase  text-5xl text-gray-700 font-bold">why us</h1>
                    <p className="font-normal">We help to connect to the best trusted local services!  </p>
                </div>
                <ul className="w-full grid grid-cols-4 gap-4">
                    {reasons.map((item, key) => (
                        <li className="w-full col-span-1 text-center space-y-2 "
                            key={key} >
                            <div className="w-full flex items-center justify-center">
                                <div
                                // style= {{hover\:`${item.color}`}}
                                // how to hover ??? or use what of properties, ask?
                                    className=" border-8 cursor-pointer border-gray-200 rounded-full">
                                    <img
                                        className="p-8"
                                        src={item.icon} />
                                </div>
                            </div>
                            <h2 className="uppercase text-lg font-medium">
                                {item.title}
                            </h2>
                            <p 
                            style= {{backgroundColor: `${item.color}`, height:2}}
                            className="mx-auto w-32 "></p>
                            <p className="text-gray-600 pt-2 text-sm tracking-tight">
                                {item.desc}
                            </p>
                        </li>
                    ))}

                </ul>
            </div>
        </section>
    )
}

export default WhyUs
