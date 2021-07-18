import React from 'react'
import { useState, useEffect } from 'react';
import Electric from './Modals/Electric';

const Services = () => {
    const [showMenu, setshowMenu] = useState(false);
    const [showSubMenu, setshowSubMenu] = useState(false);
    const [value, setValue] = useState('Mời bạn chọn nhóm dịch vụ...')
    const [service, setService] = useState('Chọn lọai dịch vụ bạn cần')
    const nest = [
        {
            name: "Điện tử, điện lạnh",
            subMenu: ["Sửa điều hòa, bảo dưỡng điều hòa",
                "Sửa Tivi tại nhà,  Sửa bình nóng lạnh, bảo dưỡng tại nhà",
                "Sửa máy giặt, bảo dưỡng máy giặt",
                " Sửa tủ lạnh, bảo dưỡng, nạp ga tại nhà",
                " Sửa quạt điện",
                " Sửa máy lọc nước",
                "Sửa bếp ga, bếp từ",
                " Sửa amply loa, dàn âm thanh tại nhà",
                "Sửa lò vi sóng",
                "Sửa lò nướng tại nhà ",
                "Sửa giàn phơi thông minh",
                "Bảo hành sửa chữa",
                "Sửa máy hút khói, hút mùi nhà bếp",
                "Thuê máy rửa bát, chén, máy sấy...",
                "Sửa máy rửa bát, chén đĩa",
                "Thiết bị khác ",
                "Gọi dịch vụ thanh lý đồ dùng"],
            img: "/assets/images/p25_1.jpg"
        },
        {
            name: "Đồ gỗ, điện nước, xây trát",
            subMenu: [
                "Lắp công tơ điện tử thông minh",
                "Sửa điện tại nhà",
                " Sửa khóa cửa tại nhà",
                "Sửa máy bơm nước",
                " Sửa đèn LED downlight ",
                " Sửa ống nước, thiết bị nhà vệ sinh",
                " Thợ sắt khung giàn, nhôm kính",
                "Sửa chữa đồ gỗ",
                " Thông tắc bồn cầu, hút bể phốt",
                "Chống thấm, chống dột, làm mái...",
                "Sửa chữa, bảo dưỡng, lắp mới của cuốn ",
                "Sơn sửa, xây trát nội ngoại thất",
                "Khoan cắt, phá dỡ công trình",
                "Dịch vụ thiết kế kiến trúc",
                "Thay thế, sửa chữa đèn chiếu sáng LED",
                "Sân vườn, hồ cá, tiểu cảnh",
                "Sửa ghế sofa"
            ],
            img: "/assets/images/p25_2.jpg",

        },
        {
            name: " Sân bay, đường dài",
            subMenu: ["Xe nhỏ, tiễn Hà Nội - Nội Bài",
                "Xe nhỏ, đón Nội Bài - Hà Nội",
                " Thuê xe 4 chỗ",
                "Thuê xe sedan nhỏ 5 chỗ",
                "Thuê xe 7 chỗ",
                "Thuê xe 16 chỗ"],
            img: "/assets/images/p25_4.jpg",
        },
        {
            name: " Cứu hộ, Giao thông",
            subMenu: ["Đăng kiểm xe oto tại nhà",
                "Cứu hộ, sửa chữa xe máy",
                " Cứu hộ xe điện",
                "Cứu hộ, sửa chữa xe oto",
                "Đưa tôi về nhà - tôi say rồi",
                " Lắp đặt phụ tùng, phụ kiện xe oto",
                "Thuê xe máy - 120k/h",
                "Sửa bếp ga, bếp từ"],
            img: "/assets/images/p25_5.jpg",
        },
        {
            name: "Giúp việc, vệ sinh, giặt là",
            subMenu: ["Giúp việc theo giờ",
                "Dịch vụ vệ sinh công nghiệp",
                "Giúp việc gia đình ăn ở lại",
                "Dịch vụ giặt là",
                "Giặt Thảm/Sofa",
                "Thay bình PetroVietnam Gas",
                "Phun thuốc diệt muỗi,diệt mối, côn trùng, khử khuẩn",
                "Rượu vang Italy nhập khẩu",
                "Dịch vụ đánh giày cao cấp",
                "Thay chấn cửa Ravo - 700.000đ/bộ",
                "Tranh treo tường gia đình",
                "Thay bình nước tinh khiết",
                "Bánh chưng Bà Kiều"],
            img: "/assets/images/p25_21.jpg",
        },
        {
            name: "Dịch vụ truyền hình",
            subMenu: ["Lắp đầu thu & antena DTT truyền hình số mặt đất AVG",
                "Lắp đầu thu & chảo DTH truyền hình số vệ tinh AVG",
                "Bảo hành, sửa chữa đầu thu DTT/DTH AVG"],
            img: "/assets/images/p25_22.jpg",
        },
        {
            name: "Dịch vụ Rạng Đông",
            subMenu: ["Lắp đèn LED tube 1.2m 18W",
                "Lắp đèn LED tube 1.2m 18W đổi màu",
                "Lắp đèn LED Panel tròn đổi màu",
                "Lắp đèn SMART LED downlight RF",
                "Lắp đèn SMART LED downlight WF",
                "Lắp công tắc cảm ứng thông minh"],
            img: "/assets/images/p25_217.jpg",
        },
        {
            name: "Máy tính, Camera, điện thoại",
            subMenu: ["Sửa chữa, lắp đặt Camera",
                "Sửa chữa máy tính, máy in, phần mềm",
                "Cài đặt, cấu hình phần mềm",
                "Mở tài khoản nhận tin mời thầu",
                "Mực in siêu tốc, siêu rẻ, siêu sạch",
                "Cartridge mực máy in G&G",
                "Dịch vụ doanh nghiệp tổng hợp",
                "Bảo dưỡng máy tính",
                "Dịch vụ sửa và cho thuê máy photocopy",
                "Sửa màn hình LCD/LED máy tính",
                "Sửa điện thoại, máy tính bảng Android",
                "Sửa iPhone, iPad",
                "Phục hồi dữ liệu ổ cứng",
                "Khóa học CNTT cơ bản",
                "Dịch vụ máy chủ",
                "Tư vấn CNTT"],
            img: "/assets/images/p25_22.jpg",
        },
        {
            name: "Dịch vụ xanh",
            subMenu: ["Lắp điều khiển điều hòa qua PamHome Wifi",
                "Lắp đặt, bào trì máy đo chất lượng không khí",
                "Xét nghiệm nước thải sinh hoạt tại nhà",
                "Thu gom rác thải điện tử"],
            img: "/assets/images/p25_2158.jpg",
        },
        {
            name: "Dịch vụ chính Hãng",
            subMenu: ["Hợp Phát - Lắp điều hòa",
                "Mua sỉ điều hòa",
                "Dịch vụ xe đạp điện HAYBIKE",
                "Dich vụ cửa Austdoor",
                "BKMech - Dịch vụ sửa máy CNC",
                "Dịch vụ của Hanell"],
            img: "/assets/images/p25_21.jpg",
        },
        {
            name: "Dịch vụ tư vấn",
            subMenu: ["Dịch vụ tư vấn dữ liệu bản đồ số",
                "Nộp/Chuyển tiền ngân hàng ngoài giờ",
                "Hàn Quốc mùa hoa anh đào 2017"],
            img: "/assets/images/p25.jpg",
        },
        {
            name: "Y tế, Sức khỏe",
            subMenu: ["Bác sĩ gia đình",
                "Xét nghiệm trẻ em",
                "Xét nghiệm tiền hôn nhân",
                "Xét nghiệm chẩn đoán trước khi sinh",
                "Xét nghiệm Đường máu - Mỡ máu",
                "Xét nghiệm tổng quát cá nhân",
                "Xét nghiệm sàng lọc ung thư"],
            img: "/assets/images/p25_217.jpg",
        },
        {
            name: "Du lịch",
            subMenu: ["Thuê áo dài, chụp ảnh kỷ yếu",
                "Tìm hướng dẫn viên du lịch - Tiếng Hàn",
                "Tìm hướng dẫn viên du lịch - Tiếng Anh",
                "Tìm hướng dẫn viên du lịch - Tiếng Nhật",
                "Tìm hướng dẫn viên du lịch - Tiếng Trung",
                "Tìm hướng dẫn viên du lịch - Tiếng Nga",
                "Tìm hướng dẫn viên du lịch - Tiếng Đức",
                "Tìm hướng dẫn viên du lịch - Tiếng Pháp"],
            img: "/assets/images/p25_2131.jpg",
        },
    ]
    
    return (
        <section className="w-full max-w-screen-2xl mx-auto sticky top-0 z-30">
            {showMenu ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden fixed  inset-0 z-50 outline-none focus:outline-none">
                        <div className="mt-28  w-auto my-6 mx-auto max-w-screen-2xl">
                            <div className="border-0 rounded-lg shadow-lg  flex flex-col w-full bg-white outline-none focus:outline-none">
                                <ul className="relative space-y-2 items-center justify-between py-2 border-b border-solid border-blueGray-200 rounded-t">
                                    <li className="relative">
                                        <ul
                                            style={{ width: 600 }}
                                            className="space-y-4 overflow-hidden">
                                            <li className="text-lg font-semibold border-b border-gray-200">
                                                <h2 className="p-3">Chọn danh mục</h2>
                                            </li>
                                            <li className="">
                                                <ul
                                                    style={{ fontSize: 16 }}
                                                    className=" m-2 cursor-pointer rounded-md border border-gray-300 text-gray-700">
                                                    {nest.map((item, i) => (

                                                        <li
                                                            onClick={() => {
                                                                setValue(item.name);
                                                                setshowMenu(false);
                                                                setService(item.subMenu[0])
                                                            }
                                                            }
                                                            key={i}
                                                            id={i}
                                                            className="flex items-center text-sm p-2 border-b border-gray-300  space-x-3 hover:bg-gray-100  ">
                                                            <img
                                                                className="rounded-md"
                                                                src={item.img} />
                                                            <p>{item.name}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button
                                            className="text-xl text-gray-500 absolute right-0 top-0 background-transparent font-bold outline-none focus:outline-none m-4 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setshowMenu(false)}>
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
            {showSubMenu ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden fixed  inset-0 z-50 outline-none focus:outline-none">
                        <div className="mt-28  w-auto my-6 mx-auto max-w-screen-2xl">
                            <div className="border-0 rounded-lg shadow-lg  flex flex-col w-full bg-white outline-none focus:outline-none">
                                <ul className="relative space-y-2 items-center justify-between py-2 border-b border-solid border-blueGray-200 rounded-t">
                                    <li className="relative">
                                        <ul
                                            style={{ width: 600 }}
                                            className="space-y-4 overflow-hidden">
                                            <li className="text-lg font-semibold border-b border-gray-200">
                                                <h2 className="p-3">Submenu</h2>
                                            </li>
                                            <li className="">
                                                <ul
                                                    style={{ fontSize: 16 }}
                                                    className=" m-2 cursor-pointer rounded-md border border-gray-300 text-gray-700">
                                                    {/* {nest.map((obj) => {
                                                        (obj.subMenu).filter(item => item === service ? console.log(obj.subMenu)
                                                            // (Object.entries(obj.subMenu).map((item, i) => {
                                                            //     // console.log(item[1])
                                                            //     <p>{item['1']}</p>
                                                            // }))
                                                             : null);
                                                    })} */}
                                                    <li
                                                        ></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button
                                            className="text-xl text-gray-500 absolute right-0 top-0 background-transparent font-bold outline-none focus:outline-none m-4 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setshowSubMenu(false)}>
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
                            {value === 'Mời bạn chọn nhóm dịch vụ...' ? <i className="fas fa-filter text-sm"></i> : <i class="fas fa-long-arrow-alt-right"></i>
                            }
                        </span>
                        <button onClick={() => setshowMenu(true)}
                            className="flex w-full items-center border-0 h-8 text-md cursor-pointer focus:outline-none">
                            {value}
                        </button>
                        <span className="text-gray-600">
                        </span>
                        <span className="flex items-center rounded-r-md  bg-gray-200 px-3 text-gray-600">
                            <i className="fas fa-sort-down"></i>
                        </span>
                    </div>
                    <div className="flex w-3/5 justify-between rounded-md items-stretch relative h-15 bg-white items-center  ">
                        <span className="rounded-l-md w-9 flex justify-center items-center text-red-600">
                            {service === 'Chọn lọai dịch vụ bạn cần' ? <i className=" fas fa-clipboard-list test-md"></i> : <i className="fas fa-long-arrow-alt-right"></i>
                            }
                        </span>

                        <button onClick={() => setshowSubMenu(true) } 
                            className="placeholder-gray-500 flex w-full items-center border-0 h-8 text-md cursor-default focus:outline-none">
                            <span className="text-red-500  font-semibold flex items-center border-0 h-8 text-md outline-none">{service}
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
