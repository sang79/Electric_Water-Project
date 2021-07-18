import React from 'react'
import { Link } from "react-router-dom"
const IntroduceRada = () => {
    return (
        <section className="bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('/assets/images/RadaPage/shutterstock.jpg')", height: 730 }}>
            <div className="relative bg-gray-800 opacity-70 h-full"></div>
            <div className="max-w-screen-2xl h-full text-white mx-auto">
                <div className="absolute mt-20 absolute-x absolute-y w-full z-30 ">
                    <ul className="mx-52 space-y-10 ">
                        <li className="uppercase text-6xl font-bold text-center leading-tight">rada - connect to trusted local services</li>
                        <li className="w-full text-lg flex justify-center space-x-5 cursor-pointer ">
                            <button className="py-2 px-5 bg-red-400 hover:bg-red-500 rounded-md uppercase">
                                <a href="#">
                                    <span>rada-android</span>
                                </a>
                            </button>
                            <button className="py-2 px-5 hover:bg-green-600 bg-green-500 rounded-md uppercase ">
                                <a href="#">
                                    <span>rada-ios</span>
                                </a>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    )
}

export default IntroduceRada
