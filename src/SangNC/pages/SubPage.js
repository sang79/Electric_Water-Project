import React from 'react';
import { Link } from "react-router-dom";

const SubPage = () => {
    const infoServices = [
        {
            title: "Sửa điều hòa",
            link: "#",
        },
        {
            title: "Sửa máy giặt",
            link: "#",
        },
        {
            title: "Thông tắc bồn cầu",
            link: "#",
        },
        {
            title: "Sửa chữa TV",
            link: "#",
        },
        {
            title: "Sửa chữa tủ lạnh",
            link: "#",
        },
        {
            title: "Sửa chữa bình nóng lạnh",
            link: "#",
        },
        {
            title: "Sửa chữa quạt điện",
            link: "#",
        },
        {
            title: "Dịch vụ đổi bình Gas",
            link: "#",
        },
    ]
    const services = [
        {
            title: "Dịch vụ điện tử, điện lạnh",
            link: "#",
            img: "/assets/images/p25_1.jpg",
        },
        {
            title: "Dịch vụ Đồ gỗ, điện nước, xây trát",
            link: "#",
            img: "/assets/images/p25_2.jpg",
        },
        {
            title: "Dịch vụ xe Sân bay, đường dài",
            link: "#",
            img: "/assets/images/p25_4.jpg",
        },
        {
            title: "Dịch vụ cứu hộ, Giao thông",
            link: "#",
            img: "/assets/images/p25_5.jpg",
        },
        {
            title: "Dịch vụ Giúp việc, vệ sinh, giặt là",
            link: "#",
            img: "/assets/images/p25_21.jpg",
        },
        {
            title: "Dịch vụ Máy tính, Camera, điện thoại",
            link: "#",
            img: "/assets/images/p25_22.jpg",
        },
        {
            title: "Dịch vụ gọi thay bình Gas",
            link: "#",
            img: "/assets/images/p25_34.jpg",
        },
        {
            title: "Dịch vụ xanh",
            link: "#",
            img: "/assets/images/p25_39.jpg",
        },
        {
            title: "Dịch vụ chính Hãng",
            link: "#",
            img: "/assets/images/p25_61.jpg",
        },
        {
            title: "Dịch Y tế, Sức khỏe",
            link: "#",
            img: "/assets/images/p25_217.jpg",
        },
    ]
    return (
        <ul className="space-y-6">
            <li className="space-y-2">
                <h2 className="text-xl font-bold">Nhóm thông tin dịch vụ</h2>
                <p className="w-14 h-1 bg-red-700"></p>
            </li>
            <li>
                <ul className="ml-3 text-lg space-y-2 cursor-pointer text-gray-700">
                    {infoServices.map((item, i) => (
                        <li className="hover:text-red-700 hover:underline">
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </li>
            <li className="py-3 space-y-3">
                <h2 className="text-xl font-bold">Chuyên mục dịch vụ</h2>
                <p className="w-14 h-1 bg-red-700"></p>
                <div class="inline-block relative w-full">
                    <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-300 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none ">
                        <option>Select Category</option>
                        <option>Un-category</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                        <i className="fas fa-sort-down"></i>
                    </div>
                </div>
            </li>
            <li className="py- space-y-2">
                <h2 className="text-xl font-bold">Thợ sửa chữa Rada</h2>
                <p className="w-14 h-1 bg-red-700"></p>
            </li>
            <li>
                <ul
                    style={{ fontSize: 16 }}
                    className="ml-3 space-y-4 cursor-pointer text-gray-700">
                    {services.map((item, i) => (
                        <li key={i} className=" ">
                            <a
                                className="flex items-center space-x-3 hover:text-red-700 hover:underline"
                                href={item.link}>
                                <img src={item.img} />
                                <p>{item.title}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </li>
            <li className="ml-2 space-y-4 pt-10">
                <div>
                    <a href="#">
                        <img src="/assets/images/trac-nghiem.jpg" />
                    </a>
                </div>
                <div className="w-full justify-center flex">
                    <a href="#">
                        <img src="/assets/images/dmca-badge-w100-5x1-08.png" />
                    </a>
                </div>
            </li>
        </ul>
    )
}

export default SubPage