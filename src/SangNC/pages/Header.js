import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <ul className="" >
            <li className="electric_menu w-full ">
                <div className="w-full max-w-screen-2xl mx-auto ">
                    <ul
                        style={{
                            fontSize: '15px'
                        }}
                        className="text-white mx-24 flex space-x-4 py-3">
                        <li className="hover:underline cursor-pointer hover:text-red-700 " >Our team</li>
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
                    <div className=" mx-24 py-12 space-y-2">
                        <span
                            style={{ fontSize: 42, textShadow: '3px 3px 6px white' }}
                            className="text-4xl tracking-thin font-bold hover:underline cursor-pointer">Thợ sửa chữa</span>
                        <p className="text-ssm uppercase font-semibold">Rada – Ứng dụng đặt dịch vụ sửa chữa</p>
                    </div>
                </div>
            </li>
            <li className="bg-red-700">
                <div className="w-full max-w-screen-2xl mx-auto ">
                    <ul className="mx-24 justify-between py-4 flex text-white font-bold ">
                        <li className="group flex space-x-5 cursor-pointer ">
                            <p className="hover:underline">Home</p>
                            <p className="hover:underline">About Us</p>
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
