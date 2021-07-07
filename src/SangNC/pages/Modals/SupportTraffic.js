import React from 'react';
const SupportTraffic = () => {
    const supportServices = [
        {
            title: "Đăng kiểm xe oto tại nhà",
        },
        {
            title: "Cứu hộ, sửa chữa xe máy",
        },
        {
            title: " Cứu hộ xe điện",
        },
        {
            title: "Cứu hộ, sửa chữa xe oto",
        },
        {
            title: "Đưa tôi về nhà - tôi say rồi",
        },
        {
            title: " Lắp đặt phụ tùng, phụ kiện xe oto",
        },
        {
            title: "Thuê xe máy - 120k/h",
        },
        {
            title: "Sửa bếp ga, bếp từ",
        }
    ]
    return (
        <ul
            style={{ width: 600 }}
            className="space-y-4 overflow-hidden">
            <li className="text-lg font-bold border-b border-gray-200">
                <h2 className="p-3">Cứu hộ giao thông</h2>
            </li>
            <li className="">
                <ul
                    style={{ fontSize: 16 }}
                    className=" m-2 cursor-default rounded-md border border-gray-300 text-gray-700">
                    {supportServices.map((item, i) => (
                        <li
                            key={i}
                            className="flex items-center p-2 border-b border-gray-300  space-x-3 hover:bg-gray-100  ">
                            <p>{item.title}</p>
                        </li>
                    ))}
                </ul>
            </li>
        </ul>
    )
}

export default SupportTraffic 