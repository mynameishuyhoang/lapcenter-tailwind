import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import Loader from "../../components/loader";
import { useState } from "react";
import deleteicon from '../../assets/image/delete.png';
import carticon from '../../assets/image/cart.png';
import { useNavigate } from "react-router-dom";
import { toastMessage } from "../../components/message";

const MyCart = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const navigate = useNavigate();

    const handleGetAllProductInCart = () => {
        setLoading(true)
        axios.get(`https://lapcenter-v1.onrender.com/api/cart/${localStorage.getItem('userId')}`, {

        })
            .then(function (response) {
                console.log('thanhcong')
                setLoading(false)
                setData(response?.data?.products)
                console.log(response?.data?.products);
            })
            .catch(function (error) {
                setLoading(false)
                console.log(error);
            });
    }

    const handleDeleteProductInCart = (productId) => {
        setLoading(true)
        axios.delete(`https://lapcenter-v1.onrender.com/api/cart/removeCartInCart/${productId}`, {

        })
            .then(function (response) {
                console.log(' Successfully delete product in cart !!')
                setLoading(false)
                handleGetAllProductInCart()
                toastMessage('success', 'Successfully delete product in cart !!');
            })
            .catch(function (error) {
                setLoading(false)
                console.log(error);
                toastMessage('error', 'Wrong. Please try again!');
            });
    }

    useEffect(() => {
        handleGetAllProductInCart()
    }, [])

    return (
        <div>
            <Navbar />
            {loading ?
                <Loader loading={loading} /> :
                <div>
                    <p className="text-center my-5 font-semibold text-xl">Giỏ hàng của <span className="text-green-400">{localStorage.getItem('name')}</span></p>
                    <div className="mx-20">
                        {data?.length === 0
                            ?
                            <div>
                                <p className="text-xl font-semibold text-center">Giỏ hàng của bạn chưa có sản phẩm.</p>
                                <div className="m-auto bg-green-400 w-40 rounded my-4 p-2 cursor-pointer hover:bg-green-600"
                                    onClick={() => navigate('/')}
                                >
                                    <p className="text-center text-white">Tiếp mục mua hàng</p>
                                </div>
                            </div>
                            :
                            <table class="table-fixed w-full">
                                <thead>
                                    <tr className="text-left border-b-[1px] border-black">
                                        <th className="w-[15%]">Hình ảnh</th>
                                        <th className="w-[40%]">Tên sản phẩm</th>
                                        <th className="w-[20%]">Hãng</th>
                                        <th className="w-[20%]">Giá</th>
                                        <th className="w-[10%]">Hành động</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((item) => (
                                        <tr className="border-b-[1px] border-gray-200">
                                            <td className="py-2"><img src={item?.image} alt="" className="w-10 h-10" /></td>
                                            <td className="py-2">{item?.productName}</td>
                                            <td className="py-2">{item?.productBrand}</td>
                                            <td className="py-2 text-red-500">{item?.price} đ</td>
                                            <td className="py-2 flex">
                                                <img src={deleteicon} alt=""
                                                    className="w-5 cursor-pointer hover:scale-125 mx-2"
                                                    onClick={() => handleDeleteProductInCart(item?._id)} />
                                                <img src={carticon} alt=""
                                                    className="w-5 cursor-pointer hover:scale-125 mx-2"
                                                    onClick={() => navigate('/buy', {
                                                        state: { productInfo: item }
                                                    })} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            }
        </div>
    )
}


export default MyCart