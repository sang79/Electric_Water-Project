import React from 'react'

const Footer = () => {
    return (
        <section
            className="w-full bg-electric sticky top-0 z-50">
            <div className="max-w-screen-2xl mx-auto " >
                <div className="mx-28 relative">
                    <ul className=" grid grid-cols-4 gap-10 cursor-pointer space-x-10 text-gray-400 py-16">
                        <li className="col-span-1 space-y-6 cursor-text">
                            <p>Registered Addr: No 18, lane 162 Le Trong Tan, Thanh Xuan Dis, Hanoi</p>
                            <div>
                                <h3>Working Office:</h3>
                                <p>No. B1-4, 54 Hạ Đình City - Thanh Xuan Dis - Hanoi</p>
                            </div>
                        </li>
                        <li className= "hover:text-red-400">
                            contact@rada.asia
                        </li>
                        <li className= "hover:text-red-400">
                            +84.395.911.911
                        </li>
                        <li 
                        style= {{backgroundColor: '#171717'}}
                        className= "absolute top-0 right-0 text-center p-16">
                            <i className="hover:text-red-400 fab fa-facebook-f"></i>
                            <p className= "py-7"> Copyright by Rada Jsc. </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer
