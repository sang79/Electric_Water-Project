import React from 'react'
import MultipleServices from './Modals/MultipleServices';
import Traffic from './Modals/Traffic';

const Services = () => {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <section className="w-full max-w-screen-2xl mx-auto sticky top-0 z-30">
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden fixed  inset-0 z-50 outline-none focus:outline-none">
                        <div className="mt-28  w-auto my-6 mx-auto max-w-screen-2xl">
                            <div className="border-0 rounded-lg shadow-lg  flex flex-col w-full bg-white outline-none focus:outline-none">
                                <ul className="relative space-y-2 items-center justify-between py-2 border-b border-solid border-blueGray-200 rounded-t">
                                    <li className="relative">
                                        <MultipleServices />
                                    </li>
                                    <li>
                                        <button
                                            className="text-xl text-gray-500 absolute right-0 top-0 background-transparent font-bold outline-none focus:outline-none m-4 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}>
                                            ×
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed bg-gray-900 inset-0 z-40"></div>
                </>
            ) : null}
            <ul className="bg-red-700 space-y-2 py-2 mx-20 rounded-md">
                <li className="px-2 flex rounded-md space-x-4  cursor-pointer">
                    <div className="flex w-3/6 pl-2 justify-between rounded-md items-stretch relative h-15 bg-white items-center  ">
                        <span className="rounded-l-md w-9 flex justify-center items-center  text-gray-600">
                            <i className="fas fa-filter text-sm"></i>
                        </span>
                        <button
                            onClick={() => setShowModal(true)}
                            className="flex w-full items-center border-0 h-8 text-md cursor-default focus:outline-none"
                        >
                            <span className="text-gray-600">
                                Mời bạn chọn nhóm dịch vụ...
                            </span>
                        </button>
                        <span className="flex items-center rounded-r-md  bg-gray-200 px-3 text-gray-600">
                            <i className="fas fa-sort-down"></i>
                        </span>
                    </div>
                    <div className="flex w-3/5 justify-between rounded-md items-stretch relative h-15 bg-white items-center  ">
                        <span className="rounded-l-md w-9 flex justify-center items-center  text-gray-600">
                            <i class="fas fa-clipboard-list test-md"></i>
                        </span>
                        <button
                            className="placeholder-gray-500 flex w-full items-center border-0 h-8 text-md cursor-default focus:outline-none">
                            <span className="text-red-500  font-semibold flex items-center border-0 h-8 text-md outline-none">
                                Chọn loại dịch vụ bạn cần
                            </span>
                        </button>
                        <span className="flex items-center rounded-r-md  bg-gray-200 px-3 text-gray-600">
                            <i className="fas fa-sort-down"></i>
                        </span>
                    </div>
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
                        style={{ backgroundColor: '#5cb85c' }}
                        className="w-3/5 flex justify-center items-center  rounded-md  h-15 items-center text-white focus:outline-none">
                        Gửi yêu cầu tìm dịch vụ gần bạn...
                    </button>
                </li>
            </ul>
        </section>
    )
}

export default Services
