import React, { useState } from "react";
import Modal from 'react-modal';
import { customStyles } from "../../constant/styles-modal";
import axios from "axios";
import { useEffect } from "react";
import { toastMessage } from "../../components/message";



const UpdateOrderDialog = ({ isOpen, handleClose, orderInfo, handleGetAll }) => {

    const [orderStatus, setOrderStatus] = useState()

    useEffect(() => {
        setOrderStatus(orderInfo?.orderStatus)
    }, [orderInfo])

    const handleUpdateOrder = (orderId) => {
        axios.patch(`https://lapcenter-v1.onrender.com/api/order/editOrderStatus/${orderId}`, {
            orderStatus: orderStatus
        })
            .then(function (response) {
                console.log("success")
                toastMessage('success', 'Update successfully!')
                handleClose()
                handleGetAll()
            })
            .catch(function (error) {
                console.log(error)
                toastMessage('error', 'Wrong. Please try again!')
                handleClose()
                handleGetAll()
            })
    }

    const handleChangeOrderStatus = (val) => {
        setOrderStatus(val)
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                style={customStyles}
            >
                <div className="w-[700px]">
                    <p className="text-lg font-bold text-red-500">Xác nhận thông tin</p>
                    <hr />
                    <div>
                        <p className="text-lg mt-2">Tên khách hàng: <span className="font-semibold">{orderInfo?.customerName}</span></p>
                        <p className="text-lg mt-2">Tên sản phẩm: <span className="font-semibold">{orderInfo?.productName}</span></p>
                        <p className="text-lg mt-2">Hãng: <span className="font-semibold">{orderInfo?.productBrand}</span></p>
                        <p className="text-lg mt-2">Số lượng: <span className="font-semibold">{orderInfo?.quantity}</span></p>
                        <p className="text-lg mt-2">Số điện thoại: <span className="font-semibold">{orderInfo?.phone}</span></p>
                        <p className="text-lg mt-2">Địa chỉ: <span className="font-semibold">{orderInfo?.address}</span></p>
                        <div className="flex">
                            <p className="text-lg mt-2">Trạng thái đơn hàng:</p>
                            <select className="m-2 border-2 border-blue-600 rounded hover:cursor-pointer"
                                value={orderStatus}
                                onChange={(e) => handleChangeOrderStatus(e.target.value)}>
                                <option value={1}>Vừa đặt hàng</option>
                                <option value={2}>Đang giao hàng</option>
                                <option value={3}>Đã nhận hàng</option>
                                <option value={4}>Không nhận hàng</option>
                            </select>
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-end">
                        <div className="my-2 w-[100px] p-3 mr-2 bg-green-500 rounded cursor-pointer hover:bg-green-700">
                            <p className="text-center text-white" onClick={() => handleUpdateOrder(orderInfo?._id)}>Cập Nhật</p>
                        </div>
                        <div className="my-2 w-[100px] p-3 ml-2 bg-gray-500 rounded cursor-pointer hover:bg-gray-700">
                            <p className="text-center text-white" onClick={handleClose}>Huỷ</p>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}


export default UpdateOrderDialog