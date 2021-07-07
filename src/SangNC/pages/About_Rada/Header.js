import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    const menuList = [
        {
            name: "Home",
            link: "#"
        },
        {
            name: "Rada News",
            link: "#"
        },
    ]
    return (
        <section className= "max-w-screen-2xl mx-auto" >
            <div className= "w-full mx-24 my-3 flex justify-between ">
                <div >
                    <img
                    className= "w-16 h-16"
                     src="/assets/images/RadaPage/logo-rada.png" />
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="#">Home</Link>
                    </li>
                    <li>
                        <Link to="#">Rada News</Link>
                    </li>
                    <li>
                        <Link to="#">Rada Vietnam</Link>
                    </li>
                    <li>
                        <Link to="#">Company Profile</Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Header
