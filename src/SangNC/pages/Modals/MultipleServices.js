import React from 'react';
const MultipleServices = () => {
    const services = [
        {
            title: "Điện tử, điện lạnh",
            img: "/assets/images/p25_1.jpg",
        },
        {
            title: "Đồ gỗ, điện nước, xây trát",
            img: "/assets/images/p25_2.jpg",
        },
        {
            title: " Sân bay, đường dài",
            img: "/assets/images/p25_4.jpg",
        },
        {
            title: "Cứu hộ, Giao thông",
            img: "/assets/images/p25_5.jpg",
        },
        {
            title: " Giúp việc, vệ sinh, giặt là",
            img: "/assets/images/p25_21.jpg",
        },
        {
            title: " Dịch vụ truyền hình",
            img: "/assets/images/p25_22.jpg",
        },
        {
            title: " Dịch vụ Rạng Đông",
            img: "/assets/images/p25_217.jpg",
        },
        {
            title: " Máy tính, Camera, điện thoại",
            img: "/assets/images/p25_22.jpg",
        },
        {
            title: " Dịch vụ xanh",
            img: "/assets/images/p25_2158.jpg",
        },

        {
            title: "Dịch vụ chính Hãng",
            img: "/assets/images/p25_21.jpg",
        },
        {
            title: "Dịch vụ tư vấn ",
            img: "/assets/images/p25.jpg",
        },
        {
            title: "Y tế, Sức khỏe",
            img: "/assets/images/p25_217.jpg",
        },
        {
            title: "Du lịch",
            img: "/assets/images/p25_2131.jpg",
        }
    ]
    return (
        <ul
            style={{ width: 600 }}
            className="space-y-4 overflow-hidden">
            <li className="text-lg font-bold border-b border-gray-200">
                <h2 className="p-3">Chọn danh mục</h2>
            </li>
            <li className="">
                <ul
                    style={{ fontSize: 16 }}
                    className=" m-2 cursor-default rounded-md border border-gray-300 text-gray-700">
                    {services.map((item, i) => (
                        <li
                            onClick={() => alert(item.title)}
                            key={i}
                            className="flex items-center p-2 border-b border-gray-300  space-x-3 hover:bg-gray-100  ">
                            <img src={item.img} />
                            <p>{item.title}</p>
                        </li>
                    ))}
                </ul>
            </li>
        </ul>
    )
}

export default MultipleServices