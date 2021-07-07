import React from 'react'

const PriceServices = () => {
    const prices = [
        {
            title: " How to Diagnose and Repair Your Air Conditioner (A/C) Capacitor ",
            link: "#",
            img: "/assets/images/capacitor.jpg",
        },
        {
            title: " Application Functions ",
            link: "#",
            img: "/assets/images/bua.png",
        },
        {
            title: "Some conventions",
            link: "#",
            img: "/assets/images/finger_phone.png",
        },
        {
            title: "Things to know",
            link: "#",
            img: "/assets/images/sale.png",
        },
        {
            title: "What you need to do to Rada",
            link: "#",
            img: "/assets/images/televisions.png",
        },
        {
            title: "What Rada can help you",
            link: "#",
            img: "/assets/images/Colorful-hands-jobs.jpg",
        },
        {
            title: "One years old birthday",
            link: "#",
            img: "/assets/images/news.png",
        },
        {
            title: "Happy Inpendence 2-9",
            link: "#",
            img: "/assets/images/quy-uoc.jpg",
        },
        {
            title: "Chirstmas Events",
            link: "#",
            img: "/assets/images/logo2-copy.png",
        },
        {
            title: "Latest Events",
            link: "#",
        },
    ]
    return (
        <section className="w-full max-w-screen-2xl mx-auto">
            <div className=" mx-20 my-4">
                <div className="pb-3 space-y-2">
                    <h2 className="text-xl font-normal">Bảng giá tham khảo khi gọi thợ Rada </h2>
                    <p
                        style={{ backgroundColor: '#2a4051' }}
                        className="w-14 h-1"></p>
                </div>
                <ul className="grid grid-cols-5 gap-2">
                    {prices.map((item, i) => (
                        <li key={i} className="col-span-1 cursor-pointer rounded-lg bg-pink-100 ">
                            <div className="relative">
                                <img
                                    className="bg-cover rounded-t-lg "
                                    style={{backgroundColor: '#001731', width: 230, height: 150 }}
                                    src={item.img} />
                                <a href="#" className="absolute bg-center text-white text-xs bottom-2 left-2 px-2 py-1 bg-yellow-800 rounded-md hover:underline">Un-Category</a>
                            </div>
                            <div className="m-2">
                                <a
                                    className="text-red-700 hover:underline"
                                    href="#">{item.title}</a>
                                <div className="text-xs space-x-1">
                                    <i className="far fa-clock text-gray-600"></i>
                                    <span className="select-none font-thin cursor-default">Update 30 mins ago</span>
                                    <span className="font-semibold hover:underline hover:text-red-700 ">Admin-Rada</span>
                                </div>
                            </div>
                        </li>
                    ))}
                    {/* {[...Array(10)].map((item, key) => (
                        <li className="col-span-1 cursor-pointer rounded-lg bg-pink-100">
                            <div className="relative">
                                <img
                                    className="rounded-t-lg "
                                    style={{ width: '230', height: '150px' }}
                                    src="/assets/images/capacitor.jpg" />
                                <a href= "#" className="absolute text-white text-xs bottom-2 left-2 px-2 py-1 bg-yellow-800 rounded-md hover:underline">Un-Category</a>
                            </div>
                            <div className= "m-2">
                                <a
                                    className="text-red-700 hover:underline"
                                    href="#"> How to Diagnose and Repair Your Air Conditioner (A/C) Capacitor </a>
                                <div className="text-xs space-x-1">
                                    <i className="far fa-clock text-gray-600"></i>
                                    <span className="select-none font-thin cursor-default">Update 30 mins ago</span>
                                    <span className="font-semibold hover:underline hover:text-red-700 ">Admin-Rada</span>
                                </div>
                            </div>
                        </li>
                    ))} */}
                </ul>
            </div>
        </section>
    )
}

export default PriceServices;
