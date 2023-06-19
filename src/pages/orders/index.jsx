import axios from "axios";
import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import Loader from "../../components/loader";
import { useState } from "react";
import deleteicon from '../../assets/image/delete.png'
import viewicon from '../../assets/image/view.png'
import UpdateOrderDialog from "./update-order-dialog";
import { toastMessage } from "../../components/message";



const Orders = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const [isOpenViewOrder, setIsOpenViewOrder] = useState(false)
    const [orderInfo, setOrderInfo] = useState()





    const handleGetAllOrders = () => {
        setLoading(true)
        axios.get('https://lapcenter-v1.onrender.com/api/order?pageSize=50&pageNumber=1', {

        })
            .then(function (response) {
                console.log("success")
                setLoading(false)
                setData(response?.data?.orders)
                console.log(response?.data?.orders);
            })
            .catch(function (error) {
                console.log(error)
            })
    }


    const handleDeleteOrders = (orderId) => {
        axios.delete(`https://lapcenter-v1.onrender.com/api/order/removeOrder/${orderId}`, {

        })
            .then(function (response) {
                console.log(' Successfully !!')
                setLoading(false)
                handleGetAllOrders()
                toastMessage('success', 'Delete successfully!')
            })
            .catch(function (error) {
                setLoading(false)
                console.log(error);
                toastMessage('error', 'Wrong. Please try again!')
            });
    }

    const handleRenderStatus = (number) => {
        switch (number) {
            case 1: return <p className="text-green-500 font-semibold">Vừa đặt hàng</p>
            case 2: return <p className="text-blue-500 font-semibold">Đang giao hàng</p>
            case 3: return <p className="text-violet-500 font-semibold">Đã nhận hàng</p>
            case 4: return <p className="text-red-500 font-semibold">Không nhận hàng</p>
        }
    }

    const handleCloseViewOrder = () => {
        setIsOpenViewOrder(false)
    }

    useEffect(() => {
        handleGetAllOrders()
    }, [])



    return (
        <div>
            <Navbar />
            {loading
                ? <Loader loading={loading} />
                : <div>
                    <p className="text-center my-5 font-semibold text-xl">Quản lý đơn hàng</p>
                    <div className="mx-20">

                        <table class="table-fixed w-full">
                            <thead>
                                <tr className="text-left border-b-[1px] border-black">
                                    <th className="w-[40%]">Tên khách hàng</th>
                                    <th className="w-[20%]">Tên sản phẩm</th>
                                    <th className="w-[20%]">Số điện thoại</th>
                                    <th className="w-[20%]">Địa chỉ</th>
                                    <th className="w-[20%]">Trạng thái đơn hàng</th>
                                    <th className="w-[20%]">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((item) => (
                                    <tr className="border-b-[1px] border-gray-200">
                                        <td className="py-2">{item?.customerName}</td>
                                        <td className="py-2">{item?.productName}</td>
                                        <td className="py-2">{item?.phone}</td>
                                        <td className="py-2">{item?.address}</td>
                                        <td className="py-2">{handleRenderStatus(item?.orderStatus)}</td>
                                        <td className="py-2 flex">
                                            <img src={deleteicon} alt=""
                                                className="w-5 cursor-pointer hover:scale-125 mx-2"
                                                onClick={() => handleDeleteOrders(item?._id)}
                                            />
                                            <img src={viewicon} alt=""
                                                className="w-12 cursor-pointer hover:scale-125 mx-2"
                                                onClick={() => {
                                                    setIsOpenViewOrder(true)
                                                    setOrderInfo(item)
                                                }}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>

            }
            <UpdateOrderDialog isOpen={isOpenViewOrder} handleClose={handleCloseViewOrder} orderInfo={orderInfo} handleGetAll={handleGetAllOrders} UpdateOrderDialog />
        </div>
    )
}



export default Orders