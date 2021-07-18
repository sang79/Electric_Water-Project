import React from 'react'

const WhatWeDo = () => {
    return (
        <section
            className="w-full bg-electric">
            <div className="mx-auto max-w-screen-2xl">
                <div className="mx-24 text-white">
                    <ul className="text-center py-20 mt-20 space-y-2">
                        <li className="uppercase  text-5xl font-bold">what we do</li>
                        <li className="font-normal">We help to verify, and make the connection between you to your needed service by!</li>
                    </ul>
                    <ul className="mx-8 grid grid-cols-3 gap-10">
                        <li className="col-span-1 text-5xl leading-tight text-right font-medium">
                            <h1>Build a platform for everyday life services!</h1>
                        </li>
                        <li className="col-span-1 text-sm text-gray-400 space-y-5">
                            <ul className="list-disc ">
                                <h3 className="font-bold">Users</h3>
                                <li> Instantly get connect to local professional services.</li>
                                <li>Clear the fear of non-transparent transaction.</li>
                                <li>Interact with the services providers before and after using the service.</li>
                                <li>Keep up with good prices and promotions.</li>
                                <li>Save time, money and energy.</li>
                            </ul>
                            <ul className="list-disc">
                                <h3 className="font-bold">Servies Providers</h3>
                                <li>Get in touch with the everyday needs of users around your location.</li>
                                <li>Increase income and fill gaps in resource utilization.</li>
                                <li>Standardize your services to the state of the art technology.</li>
                                <li>Update your promotions campaigns to potential customers.</li>
                                <li>Take a better care your customers.</li>
                            </ul>
                        </li>
                        <li className="col-span-1">
                            <ul className="space-y-6">
                                <li className="flex space-x-4 ">
                                    <p
                                        style={{ width: 64, height: 64 }}
                                        className="border-4 border-red-400 rounded-full flex items-center justify-center">70</p>
                                    <div>
                                        <h2 className="uppercase font-medium"> mobile app</h2>
                                        <p className="text-gray-500">Android and iOS</p>
                                    </div>
                                </li>
                                <li className="flex space-x-4 ">
                                    <p
                                        style={{ width: 64, height: 64 }}
                                        className="border-4 border-green-400 rounded-full flex items-center justify-center">10</p>
                                    <div>
                                        <h2 className="uppercase font-medium"> web technology</h2>
                                        <p className="text-gray-500">Associate partner web</p>
                                    </div>
                                </li>
                                <li className="flex space-x-4 ">
                                    <p
                                        style={{ width: 64, height: 64 }}
                                        className="border-4 border-blue-400 rounded-full flex items-center justify-center">20</p>
                                    <div>
                                        <h2 className="uppercase font-medium">partner system</h2>
                                        <p className="text-gray-500">SMS, App, Call</p>
                                    </div>
                                </li>
                                <li className="flex space-x-4 ">
                                    <p
                                        style={{ width: 64, height: 64 }}
                                        className="border-4 border-yellow-400 rounded-full flex items-center justify-center">100</p>
                                    <div>
                                        <h2 className="uppercase font-medium">location base</h2>
                                        <p className="text-gray-500">Only for your location</p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="space-y-1 mt-28 relative">
                        <li
                            style={{ backgroundColor: '#272727' }}
                            className="absolute absolute-x absolute-y px-2 text-md">The prize we receive</li>
                        <li className="w-full h-px bg-gray-600"></li>
                        <li className="w-full h-px bg-gray-600"></li>
                    </ul>
                    <ul className= "flex space-x-5 justify-center py-16 items-center ">
                        <li>
                            <img src= "/assets/images/RadaPage/NTDV_200.png" />
                        </li>
                        <li>
                            <img 
                            style= {{width: 130, height:50}}
                            src= "/assets/images/RadaPage/fb-start.png" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo
