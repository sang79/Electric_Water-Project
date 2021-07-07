import React from 'react';
const Good_Water_Build = () => {
    const materials = [
        {
            title: "Lắp công tơ điện tử thông minh",
        },
        {
            title: "Sửa điện tại nhà",
        },
        {
            title: " Sửa khóa cửa tại nhà",
        },
        {
            title: "Sửa máy bơm nước",
        },
        {
            title: " Sửa đèn LED downlight ",
        },
        {
            title: " Sửa ống nước, thiết bị nhà vệ sinh",
        },
        {
            title: " Thợ sắt khung giàn, nhôm kính",
        },
        {
            title: "Sửa chữa đồ gỗ",
        },
        {
            title: " Thông tắc bồn cầu, hút bể phốt",
        },

        {
            title: "Chống thấm, chống dột, làm mái...",
        },
        {
            title: "Sửa chữa, bảo dưỡng, lắp mới của cuốn ",
        },
        {
            title: "Sơn sửa, xây trát nội ngoại thất",
        },
        {
            title: "Khoan cắt, phá dỡ công trình",
        },
        {
            title: "Dịch vụ thiết kế kiến trúc",
        },
        {
            title: "Thay thế, sửa chữa đèn chiếu sáng LED",
        },
        {
            title: "Sân vườn, hồ cá, tiểu cảnh",
        },
        {
            title: "Sửa ghế sofa ",
        }
    ]
    return (
        <ul
            style={{ width: 600 }}
            className="space-y-4 overflow-hidden">
            <li className="text-lg font-bold border-b border-gray-200">
                <h2 className="p-3">Đồ gỗ, điện nước, xây trát</h2>
            </li>
            <li className="">
                <ul
                    style={{ fontSize: 16 }}
                    className=" m-2 cursor-default rounded-md border border-gray-300 text-gray-700">
                    {materials.map((item, i) => (
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

export default Good_Water_Build 