import React from 'react'

const ActiveServices = () => {
    const activeServices = [
        {
            desc: 'Repair & maintenance service for the AirCon, TV, Washing machine, Heater, Microwave, Electric fan, fridge...',
            quote: <i class="fas fa-quote-left"></i>,
            title: 'Home Appliance Repair Service',
            subTitle: 'Service Providers: 1550',
            icon: '/assets/images/RadaPage/home.jpg'
        },
        {
            desc: 'House repair service including indoor, outdoor, roof, interiors furniture, electrical, supply & drainage system, garden…',
            quote: <i class="fas fa-quote-left"></i>,
            title: 'Building & Construction Repair Service',
            subTitle: 'Service Providers: 150',
            icon: '/assets/images/RadaPage/build.jpg'
        },
        {
            desc: 'Rent a car to the airport or pick you up to anywhere you like with cheap price & friendly drivers.',
            quote: <i class="fas fa-quote-left"></i>,
            title: 'Airport & Inter-Province Car',
            subTitle: 'Service Providers: 800',
            icon: '/assets/images/RadaPage/plane.jpg'
        },
        {
            desc: 'Auto, motorcycle & electric bike repair & rescue services include spare parts replacement or upgrading…',
            quote: <i class="fas fa-quote-left"></i>,
            title: 'Vehicles Repair Service',
            subTitle: 'Service Provider: 750',
            icon: '/assets/images/RadaPage/car.jpg'
        },
        {
            desc: 'Repair & installation service for IT device include: PC, Laptop, Server, Printer, LCD, Projector, Scanner…',
            quote: <i class="fas fa-quote-left"></i>,
            title: 'IT Device & Office Service',
            subTitle: 'Service Providers: 150',
            icon: '/assets/images/RadaPage/computer.jpg'
        },
        {
            desc: 'Connect to maid or hour base help includes Home cleaning, Washing, Children care…',
            quote: <i class="fas fa-quote-left"></i>,
            title: 'Maid Service',
            subTitle: 'Service Providers: 100',
            icon: '/assets/images/RadaPage/machine.jpg'
        },
    ]
    return (
        <section
            style={{ backgroundColor: '#8c7620' }}
            className="w-full">
            <div className="mx-auto max-w-screen-2xl pb-24">
                <div className="mx-24 mt-20">
                    <div className="text-center text-white py-20 space-y-2">
                        <h1 className="uppercase  text-5xl font-bold">most active services</h1>
                        <p className="font-normal">Your request will be served to your home in a single touch</p>
                    </div>
                    <ul className="mx-12 grid grid-cols-3 gap-8 ">
                        {activeServices.map((item, key) => (
                            <li className="col-span-1 rounded-md p-6 bg-white">
                                <p>{item.desc}</p>
                                <ul className="flex space-x-5 pt-6 pb-4">
                                    <li className="text-4xl text-red-400 mt-3">
                                        {item.quote}
                                    </li>
                                    <li className="text-sm">
                                        <p className="">{item.title}</p>
                                        <p>{item.subTitle}</p>
                                    </li>
                                </ul>
                                <div className="w-full flex justify-end">
                                    <img
                                        className="rounded-full"
                                        style={{ width: 67, height: 67 }}
                                        src={item.icon} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ActiveServices
