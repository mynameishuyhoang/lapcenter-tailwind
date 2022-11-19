import React from "react";
import Navbar from "../../components/navbar";

const ProductDetail = () => {
    return (
        <div>
            <Navbar />
            <div>
                <h1 className="px-10 py-5">
                    <p className="text-2xl font-semibold">Tên sản phẩm</p>
                </h1>
                <div className="flex">
                    <div className="flex px-10">
                        <p>Tình trạng:</p>
                        <p className="ml-2">Còn hàng</p>
                    </div>
                    <div className="flex px-10">
                        <p>Bảo hành:</p>
                        <p className="ml-2">24 tháng</p>
                    </div>
                </div>
            </div>
            <hr className="my-3 mx-10" />
            <div className="flex">
                <div className="w-[33%] px-10 cursor-pointer">
                    <img className="w-full h-auto" src="https://fptshop.com.vn/Uploads/images/2015/0511/Lenovo-IdeaPad-Gaming-3-fpt-1.jpg" alt="" />
                    <div className="flex justify-center">
                        <div className="w-10 h-9 m-5 border-gray-700 border-2 cursor-pointer">
                            <img className="w-10 h-8" src="https://fptshop.com.vn/Uploads/images/2015/0511/Lenovo-IdeaPad-Gaming-3-fpt-1.jpg" alt="" />
                        </div>
                        <div className="w-10 h-9 m-5 border-gray-700 border-2 cursor-pointer">
                            <img className="w-10 h-8" src="https://fptshop.com.vn/Uploads/images/2015/0511/Lenovo-IdeaPad-Gaming-3-fpt-1.jpg" alt="" />
                        </div>
                        <div className="w-10 h-9 m-5 border-gray-700 border-2 cursor-pointer">
                            <img className="w-10 h-8" src="https://fptshop.com.vn/Uploads/images/2015/0511/Lenovo-IdeaPad-Gaming-3-fpt-1.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-[33%] px-10">
                    <div>
                        <span >Giá bán:</span>
                        <span >100000000 VND</span>
                    </div>
                    <div className="border-dotted border-2">
                        <div className="bg-green-600 p-5">
                            <p className="text-white text-lg font-semibold">Khuyến mãi - Quà tặng</p>
                        </div>
                        <div className="border-dotted border-2">
                            <p className="text-lg font-semibold p-5 ">
                                Thông tin quà tặng
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-[100px] p-2 bg-red-500 rounded-lg hover:bg-red-700 hover:cursor-pointer m-5">
                            <p className="text-center text-sm font-semibold text-white">
                                Mua ngay
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <span className="mt-0.5">
                            Gọi ngay
                        </span>
                        <span className="mx-2 text-lg text-red-600 font-semibold">
                            0949 44 2510
                        </span>
                        <span className="mt-0.5">
                            để giữ hàng
                        </span>
                    </div>
                </div>
                <div className="w-[33%] px-10">
                    <div>
                        <p className="text-lg font-semibold">Điện thoại tư vấn - Đặt hàng.</p>
                        <ul className="ml-10 text-lg font-semibold">
                            <li className="list-disc">Huy Hoàng.</li>
                            <li className="list-disc">Văn Lực.</li>
                            <li className="list-disc">Xuân Tiến.</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Địa chỉ mua hàng.</p>
                        <ul className="ml-10 text-lg font-semibold">
                            <li className="list-disc">124 Nguyễn Văn Linh - Đà Nẵng.</li>
                            <li className="list-disc">86 Lê Độ - Đà Nẵng.</li>
                            <li className="list-disc">12 Lê Hoàng - Huế.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-3 mx-10" />
            <div className="mx-20">
            <table class="table-fixed w-full">
                <thead>
                    <tr className="text-left border-b-[1px] border-black">
                        <th className="w-[30%]">Phần cứng</th>
                        <th className="w-[70%]">Thông số kỹ thuật</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b-[1px] border-gray-200">
                        <td className="py-2">Model</td>
                        <td className="py-2">Lenovo Ideapad Gaming 3 15ARH05 (82EY00JXVN)</td>
                    </tr>
                    <tr className="border-b-[1px] border-gray-200">
                        <td className="py-2">CPU</td>
                        <td className="py-2">AMD Ryzen 5 4600H</td>
                    </tr>
                    <tr className="border-b-[1px] border-gray-200">
                        <td className="py-2">RAM</td>
                        <td className="py-2">8GB DDR4 3200Mhz</td>
                    </tr>
                    <tr className="border-b-[1px] border-gray-200">
                        <td className="py-2">Ổ Cứng</td>
                        <td className="py-2">256GB SSD PCIe NVMe 3.0x4</td>
                    </tr>
                    <tr className="border-b-[1px] border-gray-200">
                        <td className="py-2">Card đồ hoạ</td>
                        <td className="py-2">NVIDIA GeFore GTX  1650 4GB GDDR6</td>
                    </tr>
                    <tr className="border-b-[1px] border-gray-200">
                        <td className="py-2">Màn hình</td>
                        <td className="py-2">15.6inch FHD</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default ProductDetail