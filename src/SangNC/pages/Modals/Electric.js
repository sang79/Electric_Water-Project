import React from 'react';
const Electric = () => {
    const electric = [
        {
            title: "Sửa điều hòa, bảo dưỡng điều hòa",
        },
        {
            title: "Sửa Tivi tại nhà",
        },
        {
            title: " Sửa bình nóng lạnh, bảo dưỡng tại nhà",
        },
        {
            title: "Sửa máy giặt, bảo dưỡng máy giặt",
        },
        {
            title: " Sửa tủ lạnh, bảo dưỡng, nạp ga tại nhà",
        },
        {
            title: " Sửa quạt điện",
        },
        {
            title: " Sửa máy lọc nước",
        },
        {
            title: "Sửa bếp ga, bếp từ",
        },
        {
            title: " Sửa amply loa, dàn âm thanh tại nhà",
        },

        {
            title: "Sửa lò vi sóng",
        },
        {
            title: "Sửa lò nướng tại nhà ",
        },
        {
            title: "Sửa giàn phơi thông minh",
        },
        {
            title: "Bảo hành sửa chữa",
        },
        {
            title: "Sửa máy hút khói, hút mùi nhà bếp",
        },
        {
            title: "Thuê máy rửa bát, chén, máy sấy...",
        },
        {
            title: "Sửa máy rửa bát, chén đĩa",
        },
        {
            title: "Thiết bị khác ",
        },
        {
            title: "Gọi dịch vụ thanh lý đồ dùng"
        }
    ]
    return (
        <ul
            style={{ width: 600 }}
            className="space-y-4 overflow-hidden">
            <li className="text-lg font-bold border-b border-gray-200">
                <h2 className="p-3">Điện tử, điện lạnh</h2>
            </li>
            <li className="">
                <ul
                    style={{ fontSize: 16 }}
                    className=" m-2 cursor-default rounded-md border border-gray-300 text-gray-700">
                    {electric.map((item, i) => (
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

export default Electric