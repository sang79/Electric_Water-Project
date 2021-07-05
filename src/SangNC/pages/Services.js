import React from 'react'

const Services = () => {
    return (
        <section className="w-full max-w-screen-2xl mx-auto w-full sticky bg-white top-0 z-30">
            <ul className="bg-red-700 space-y-2 py-2 mx-24 rounded-md">
                <li className="px-2 flex rounded-md space-x-4  cursor-pointer">
                    <ul className="w-3/6 flex justify-between rounded-md items-stretch relative h-15 bg-white items-center  ">
                        <li className="flex items-center space-x-1 pl-1 text-gray-600">
                            <i className="fas fa-filter text-sm"></i>
                            <p
                                className="placeholder-gray-500 flex w-96 items-center border-0 h-8 text-md outline-none"
                            >
                                Mời bạn chọn nhóm dịch vụ...
                            </p>
                        </li>

                        <li className="flex items-center rounded-r-md  bg-gray-200 px-3 text-gray-600">
                            <i className="fas fa-sort-down"></i>
                        </li>
                    </ul>

                    <ul className="flex w-3/5 justify-between rounded-md items-stretch relative h-15 bg-white items-center  ">
                        <li className="flex items-center space-x-2 pl-2 text-red-600">
                            <i class="fas fa-clipboard-list test-md"></i>
                            <p
                                className="text-red-500 font-semibold flex items-center border-0 h-8 text-md outline-none"
                            >
                                Chọn loại dịch vụ bạn cần
                            </p>
                        </li>

                        <li className="flex items-center rounded-r-md  bg-gray-200 px-3 text-gray-600">
                            <i className="fas fa-sort-down"></i>
                        </li>
                    </ul>
                </li>
                <li className="px-2 flex rounded-md space-x-4  cursor-pointer">
                    <ul className="w-3/6 flex justify-between rounded-md items-stretch relative h-15 bg-white items-center  ">
                        <li className="bg-gray-100 border-r border-gray-300 rounded-l-md w-9 flex justify-center items-center  text-gray-600">
                            <i class="fas fa-mobile-alt text-md "></i>
                        </li>
                        <li className="w-full">
                            <input
                                type="text"
                                className="w-full rounded-r-md pl-4 transition delay-10 duration-300 ease-in-out focus:ring-2 focus:ring-blue-400   placeholder-red-600 flex items-center border-0 h-8 text-sm outline-none"
                                placeholder="1. Điện thoại để dịch vụ gọi bạn"
                            />
                        </li>
                    </ul>
                    <ul className="w-3/5 flex justify-between rounded-md items-stretch relative h-15 bg-white items-center  ">
                        <li className="bg-gray-100 border-r border-gray-300 rounded-l-md w-9 flex justify-center items-center  text-gray-600">
                            <i class="fas fa-map-marker-alt text-md"></i>
                        </li>
                        <li className="w-full">
                            <input
                                type="text"
                                className="w-full rounded-r-md pl-4 transition delay-10 duration-300 ease-in-out focus:ring-2 focus:ring-blue-400   placeholder-red-600 flex items-center border-0 h-8 text-sm outline-none"
                                placeholder="2. Khu vực bạn muốn tìm dịch vụ"
                            />
                        </li>
                    </ul>

                </li>
                <li className="px-2 flex rounded-md space-x-4  cursor-pointer">
                    <ul className="w-3/6 flex justify-between rounded-md items-stretch relative h-15 bg-white items-center  ">
                        <li className="bg-gray-100 border-r border-gray-300 rounded-l-md w-9 flex justify-center items-center  text-gray-600">
                            <i class="fas fa-edit text-md"></i>
                        </li>
                        <li className="w-full">
                            <input
                                type="text"
                                className="pl-4 w-full rounded-r-md transition delay-100 duration-300 ease-in-out focus:ring-2 focus:ring-blue-400  placeholder-red-600 flex items-center border-0 h-8 text-sm outline-none"
                                placeholder="3. Ghi chú, vấn đề hoặc địa chỉ chi tiết..."
                            />
                        </li>
                    </ul>
                    <button 
                    style= {{backgroundColor: '#5cb85c'}}
                    className="w-3/5 flex justify-center items-center outline-none rounded-md  h-15 items-center text-white ">
                        Gửi yêu cầu tìm dịch vụ gần bạn...
                    </button>
                </li>
            </ul>
        </section>
    )
}

export default Services
