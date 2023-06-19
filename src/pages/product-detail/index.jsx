import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar";
import axios from "axios";
import Loader from "../../components/loader";
import BrandCard from "../../components/brand-card";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { toast } from 'react-toastify';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}

const ProductDetail = () => {

    const { state } = useLocation()
    const [data, setData] = useState()
    const [listDataBrand, setListDataBrand] = useState()
    const [loading, setLoading] = useState(false)
    const [isDissableAddCart, setIsDisabledAddCart] = useState(false)
    const [thumnail, setThumnail] = useState()
    const navigate = useNavigate();

    const fetchAPIaxios = () => {
        setLoading(true)
        axios.get(`https://lapcenter-v1.onrender.com/api/product/getProductById/${state.id}`)
            .then(function (response) {
                // handle success
                console.log('response:', response.data.response)
                setData(response.data?.response)
                setThumnail(response.data.response.images[0])
                setLoading(false)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setLoading(false)

            })
    }

    const handleSearching = (e) => {
        setLoading(true)
        axios.get(`https://lapcenter-v1.onrender.com/api/product?productBrand=${state.brand}`, {
            // params: {
            //     productBrand: state.brand,
            // }
        })
            .then(function (response) {
                console.log('brand: ', response.data.products);
                setListDataBrand(response.data.products)
                setLoading(false)
            })
            .catch(function (error) {
                setLoading(false)
            })
    }

    const handleAddProductToCart = () => {
        setIsDisabledAddCart(true)
        axios.post('https://lapcenter-v1.onrender.com/api/cart/addProductToCart', {
            userId: localStorage.getItem('userId'),
            productId: data?._id,
            productName: data?.name,
            productBrand: data?.brand,
            image: thumnail,
            price: data?.price
        })
            .then(function (response) {
                console.log(response)
                setIsDisabledAddCart(false)
                toast.success(`Add ${data?.name} to cart successfully!`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(function (error) {
                console.log(error)
                setIsDisabledAddCart(false)
                toast.error('Wrong. Please try again!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }

    useEffect(() => {
        fetchAPIaxios()
        handleSearching()
        window.scroll(0, 0)
    }, [state.id])

    return (
        <div>
            <Navbar />
            {loading ?
                <Loader loading={loading} /> :
                <div>
                    <div>
                        <h1 className="px-10 py-5">
                            <p className="text-2xl font-semibold">{data?.name}</p>
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
                            <img className="w-full h-auto" src={thumnail} alt="" />
                            <div className="flex justify-center">
                                {data?.images?.map((img, index) => (
                                    <img
                                        key={index}
                                        className="w-10 h-9 m-5 border-gray-700 border-2 cursor-pointer"
                                        src={img}
                                        onClick={() => setThumnail(img)}
                                    >
                                    </img>
                                ))}
                            </div>
                        </div>
                        <div className="w-[33%] px-10">
                            <div>
                                <span >Giá bán:</span>
                                <span className="text-red-600 text-2xl" >{data?.price} VNĐ</span>
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
                                <div className="w-[100px] p-2 bg-red-500 rounded-lg hover:bg-red-700 hover:cursor-pointer my-3"
                                >
                                    <p className="text-center text-sm font-semibold text-white"
                                        onClick={() => navigate('/buy', {
                                            state: {
                                                productInfo: data
                                            }
                                        })}
                                    >
                                        Mua ngay
                                    </p>
                                </div>
                            </div>
                            {localStorage.getItem('name') && (
                                <div className="flex justify-center">
                                    <div className={`w-[160px] p-2 bg-green-500 rounded-lg hover:bg-green-700 mb-3 ${isDissableAddCart ?
                                        'cursor-not-allowed' : 'cursor-pointer'
                                        }`}
                                        onClick={!isDissableAddCart && handleAddProductToCart}
                                    >
                                        <p className="text-center text-sm font-semibold text-white"
                                        >
                                            Thêm vào giỏ hàng
                                        </p>
                                    </div>
                                </div>
                            )}
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
                                    <td className="py-2">{data?.model}</td>
                                </tr>
                                <tr className="border-b-[1px] border-gray-200">
                                    <td className="py-2">CPU</td>
                                    <td className="py-2">{data?.cpu}</td>
                                </tr>
                                <tr className="border-b-[1px] border-gray-200">
                                    <td className="py-2">RAM</td>
                                    <td className="py-2">{data?.ram}</td>
                                </tr>
                                <tr className="border-b-[1px] border-gray-200">
                                    <td className="py-2">Ổ Cứng</td>
                                    <td className="py-2">{data?.disk}</td>
                                </tr>
                                <tr className="border-b-[1px] border-gray-200">
                                    <td className="py-2">Card đồ hoạ</td>
                                    <td className="py-2">{data?.card}</td>
                                </tr>
                                <tr className="border-b-[1px] border-gray-200">
                                    <td className="py-2">Màn hình</td>
                                    <td className="py-2">{data?.monitor}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr className="my-3 mx-10" />
                    <p className="text-red-700 text-3xl font-semibold mx-10 my-2">Sản phẩm cùng thương hiệu</p>
                    <div>
                        <Carousel responsive={responsive} className="py-6">
                            {listDataBrand?.length > 0 && listDataBrand?.map((item, index) => (
                                <BrandCard item={item} key={index} />
                            ))}
                        </Carousel>
                    </div>
                </div>

            }
        </div>
    )
}

export default ProductDetail