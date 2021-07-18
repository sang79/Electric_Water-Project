import React from 'react';
const MultipleServices = () => {

    const menu = [
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
    const subMenu = {
        'Điện tử, điện lạnh': [
            "Sửa điều hòa, bảo dưỡng điều hòa",
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
            "Gọi dịch vụ thanh lý đồ dùng",
        ],

        'Đồ gỗ, điện nước, xây trát': [
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
        'Sân bay - Đường dài': [
            "Đăng kiểm xe oto tại nhà",
            "Cứu hộ, sửa chữa xe máy",
            " Cứu hộ xe điện",
            "Cứu hộ, sửa chữa xe oto",
            "Đưa tôi về nhà - tôi say rồi",
            " Lắp đặt phụ tùng, phụ kiện xe oto",
            "Thuê xe máy - 120k/h",
            "Sửa bếp ga, bếp từ",
        ],
        'Cứu hộ, Giao thông': [
            "Đăng kiểm xe oto tại nhà",
            "Cứu hộ, sửa chữa xe máy",
            " Cứu hộ xe điện",
            "Cứu hộ, sửa chữa xe oto",
            "Đưa tôi về nhà - tôi say rồi",
            " Lắp đặt phụ tùng, phụ kiện xe oto",
            "Thuê xe máy - 120k/h",
            "Sửa bếp ga, bếp từ",
        ],
        'Giúp việc, vệ sinh, giặt là' : [
            "Giúp việc theo giờ",
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
            "Bánh chưng Bà Kiều"
        ],
        'Dịch vụ truyền hình' : [
            "Lắp đầu thu & antena DTT truyền hình số mặt đất AVG",
            "Lắp đầu thu & chảo DTH truyền hình số vệ tinh AVG",
            "Bảo hành, sửa chữa đầu thu DTT/DTH AVG"
        ],
        'Dịch vụ Rạng Đông' : [
            "Lắp đèn LED tube 1.2m 18W",
            "Lắp đèn LED tube 1.2m 18W đổi màu",
            "Lắp đèn LED Panel tròn đổi màu",
            "Lắp đèn SMART LED downlight RF",
            "Lắp đèn SMART LED downlight WF",
            "Lắp công tắc cảm ứng thông minh"
        ],
        'Máy tính, camera, điện thoại' : [
            "Sửa chữa, lắp đặt Camera",
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
            "Tư vấn CNTT"
        ],
        'Dịch vụ xanh' : [
            "Lắp điều khiển điều hòa qua PamHome Wifi",
            "Lắp đặt, bào trì máy đo chất lượng không khí",
            "Xét nghiệm nước thải sinh hoạt tại nhà",
            "Thu gom rác thải điện tử"
        ],
        'Dịch vụ chính hãng' : [
            "Hợp Phát - Lắp điều hòa",
            "Mua sỉ điều hòa",
            "Dịch vụ xe đạp điện HAYBIKE",
            "Dich vụ cửa Austdoor",
            "BKMech - Dịch vụ sửa máy CNC",
            "Dịch vụ của Hanell"
        ],
        'Dịch vụ tư vấn' : [
            "Dịch vụ tư vấn dữ liệu bản đồ số",
            "Nộp/Chuyển tiền ngân hàng ngoài giờ",
            "Hàn Quốc mùa hoa anh đào 2017"
        ],
        'Y tế, sức khỏe' : [
            "Bác sĩ gia đình",
            "Xét nghiệm trẻ em",
            "Xét nghiệm tiền hôn nhân",
            "Xét nghiệm chẩn đoán trước khi sinh",
            "Xét nghiệm Đường máu - Mỡ máu",
            "Xét nghiệm tổng quát cá nhân",
            "Xét nghiệm sàng lọc ung thư"
        ],
        'Du lịch' : [
            "Thuê áo dài, chụp ảnh kỷ yếu",
            "Tìm hướng dẫn viên du lịch - Tiếng Hàn",
            "Tìm hướng dẫn viên du lịch - Tiếng Anh",
            "Tìm hướng dẫn viên du lịch - Tiếng Nhật",
            "Tìm hướng dẫn viên du lịch - Tiếng Trung",
            "Tìm hướng dẫn viên du lịch - Tiếng Nga",
            "Tìm hướng dẫn viên du lịch - Tiếng Đức",
            "Tìm hướng dẫn viên du lịch - Tiếng Pháp"
        ]
    }
    console.log(menu)
    console.log(subMenu)

    return (
        <ul
            style={{ width: 600 }}
            className="space-y-4 overflow-hidden">
            <li className="text-lg font-semibold border-b border-gray-200">
                <h2 className="p-3">Chọn danh mục</h2>
            </li>
            <li className="">
                <ul
                    style={{ fontSize: 16 }}
                    className=" m-2 cursor-default rounded-md border border-gray-300 text-gray-700">
                    {menu.map((item, i) => (
                        <li
                            onClick= {
                                // alert(item),
                                console.log(item.title)
                            }
                            key={i}
                            className="flex items-center text-sm p-2 border-b border-gray-300  space-x-3 hover:bg-gray-100  ">
                            <img
                            className= "rounded-md"
                            src={item.img} />
                            <p>{item.title}</p>
                        </li>
                    ))}

                </ul>
            </li>
        </ul>
    )
}

export default MultipleServices