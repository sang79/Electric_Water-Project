import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    const menuList = [
        {
            title: "Home",
            link: "#",
        },
        {
            title: "Rada News",
            link: "#",
        },
        {
            title: "Rada Vietnam",
            link: "#",
        },
        {
            title: "Company Profile",
            link: "#",
        },


    ]
    return (
        <section className="w-full bg-white sticky top-0 z-50">
            <div className="max-w-screen-2xl mx-auto " >
                <div className="mx-24 py-2 flex text-lg items-center text-gray-700 justify-between ">
                    <Link to="#">
                        <img
                            className="w-16 h-16"
                            src="/assets/images/RadaPage/logo-rada.png" />
                    </Link>
                    <ul className="flex space-x-5">
                        {menuList.map((item, key) => (
                            <li key={key} className="">
                                <Link
                                    className=" hover:text-red-700"
                                    to={item.link}> {item.title} </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Header
