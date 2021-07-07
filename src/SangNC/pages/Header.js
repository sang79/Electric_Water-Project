import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <ul className="" >
            <li className="electric_menu w-full ">
                <div className="w-full max-w-screen-2xl mx-auto">
                    <ul
                        style={{
                            fontSize: '15px'
                        }}
                        className="text-white mx-20 flex space-x-4 py-3">
                      
                        <li className="hover:underline cursor-pointer hover:text-red-700 ">
                            <a href= "#">
                                Our team
                            </a>
                        </li>
                        <li className="hover:underline cursor-pointer hover:text-red-700 ">Media</li>
                        <li className="hover:underline cursor-pointer hover:text-red-700 ">APIs</li>
                        <li className="hover:underline cursor-pointer hover:text-red-700 ">Tiếng Việt</li>
                    </ul>
                </div>
            </li>
            <li
                style={{ backgroundImage: "url('/assets/images/apprada-banner.jpg')" }}
                className="text-red-700 bg-center bg-cover bg-no-repeat">
                <div className="w-full max-w-screen-2xl mx-auto ">
                    <div className=" mx-20 py-12 space-y-2">
                        <span
                            style={{ fontSize: 42, textShadow: '3px 3px 6px white' }}
                            className="text-4xl tracking-thin font-bold hover:underline cursor-pointer">Thợ sửa chữa</span>
                        <p className="text-ssm uppercase font-semibold">Rada – Ứng dụng đặt dịch vụ sửa chữa</p>
                    </div>
                </div>
            </li>
            <li className="bg-red-700">
                <div className="w-full max-w-screen-2xl mx-auto ">
                    <ul className="mx-20 justify-between pt-4 flex text-white font-bold ">
                        <li className="flex cursor-pointer ">
                            <div className="group space-y-4">
                                <p className="hover:underline">Home</p>
                                <p className="transition duration-300 opacity-0 group-hover:opacity-100 h-1 bg-white w-16"></p>
                            </div>
                            <div className="group space-y-4">
                                <Link to= "/header">
                                <p className="hover:underline">About Us</p>
                                </Link>
                                <p className="transition duration-300 opacity-0 group-hover:opacity-100 h-1 bg-white w-20"></p>
                            </div>
                        </li>
                        <li className="">
                            <i className="fa fa-search text-sm cursor-pointer"></i>
                        </li>
                    </ul>
                </div>
            </li>
        </ul >
    )
}

export default Header
