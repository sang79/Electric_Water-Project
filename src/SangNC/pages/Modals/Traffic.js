import React from 'react';
const Traffic = () => {
   
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
                    {[...Array(24)].map((item, i) => (
                        <li
                            key={i}
                            className="flex items-center p-2 border-b border-gray-300  space-x-3 hover:bg-gray-100  ">
                            <p>175k: Xe nhỏ, tiễn Hà Nội - Nội Bài</p>
                        </li>
                    ))}
                </ul>
            </li>
        </ul>
    )
}

export default Traffic 