import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router";
import Modal from 'react-modal';
import './style.css'
import { customStyles } from "../../constant/styles-modal";
import close from '../../assets/image/close.png'
import { toastMessage } from "../../components/message";
import Input from "../../components/input";
import Button from "../../components/button";

const Buy = () => {
    const { state } = useLocation()
    const [quantity, setQuantity] = useState(1)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [isDisabled, setIsDisabled] = useState(true)
    const [isOpen, setIsOpen] = useState(false)


    // console.log('state: ', state)

    const productInfo = state?.productInfo

    const handleChangeQuantity = (val) => {

        if (val < 0) {
            setQuantity(1)
        }
        else setQuantity(val)
    }

    const incrementQuantity = () => {
        if (quantity === '') setQuantity(1)
        else
            setQuantity(parseInt(quantity) + 1)
    }

    const decrementQuantity = () => {
        if (quantity <= 1) {
            setQuantity(1)
        } else setQuantity(parseInt(quantity) - 1)
    }

    const handleOpenModal = () => {
        setIsOpen(true)
    }

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const handleBuyProduct = () => {
        axios.post('https://lapcenter-v1.onrender.com/api/order/addOrder', {
            // post req
            customerName: name,
            phone: phone,
            email: email,
            address: address,
            productName: productInfo?.name || productInfo?.productName,
            productBrand: productInfo?.brand || productInfo?.productBrand,
            quantity: quantity,
            orderStatus: 1
        })
            .then(function (response) {
                console.log(response)
                setIsOpen(false)
                toastMessage('success', 'Successfully!');
                localStorage.getItem('userId') && handleAddProductInHistory()
            })
            .catch(function (error) {
                console.log(error)
                setIsOpen(false)
                toastMessage('errot', 'Wrong. Please try again!');
            })
    }

    const handleAddProductInHistory = () => {
        axios.post('https://lapcenter-v1.onrender.com/api/history/addProductToHistory', {
            userId: localStorage.getItem('userId'),
            phone: productInfo?.phone,
            address: productInfo?.address,
            productName: productInfo?.name || productInfo?.productName,
            productBrand: productInfo?.brand || productInfo?.productBrand,
            quantity: quantity
        })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    useEffect(() => {
        if (!name || !email || !phone || !address || !quantity || parseInt(quantity) === 0) {
            setIsDisabled(true)
        }
        if (name && email && phone && address && quantity > 0) {
            setIsDisabled(false)
        }
    }, [name, email, phone, address, quantity])


    const handleChange = (val, field) => {
        switch (field) {
            case 'name':
                setName(val)
                break;
            case 'email':
                setEmail(val)
                break;
            case 'phone':
                setPhone(val)
                break;
            case 'address':
                setAddress(val)
                break;
            default:
                break;
        }
    }


    return (
        <div>
            <Navbar />
            <div className="px-20 py-5">
                <div className="px-40">
                    <p className="mb-4">
                        <span className="text-red-500 font-bold">Để đặt hàng, </span>
                        quý khách vui lòng kiểm tra sản phẩm, số lượng, giá, màu sắc và điền các thông tin dưới đây:
                    </p>
                    <div className="flex justify-between">
                        <img src={productInfo?.image || productInfo?.images[0]} alt="" className="w-[100px] h-p-[70px] border-[1px] border-gray-400 rounded" />
                        <p className="font-bold">{productInfo?.name || productInfo?.productName}</p>
                        <div className="flex justify-between">
                            <div className="bg-gray-300 w-[35px] h-[35px] rounded-lg hover:bg-gray-400 cursor-pointer">
                                <p className="text-2xl text-green-700 text-center" onClick={() => decrementQuantity()}>-</p>
                            </div>
                            <input type="number"
                                value={quantity}
                                onChange={(e) => handleChangeQuantity(e.target.value)}
                                className="w-[50px] h-[35px] border-[1px] border-gray-700 mx-2 rounded outline-none px-2 hide_input" />
                            <div className="bg-gray-300 w-[35px] h-[35px] rounded-lg hover:bg-gray-400 cursor-pointer">
                                <p className="text-2xl text-green-700 text-center" onClick={() => incrementQuantity()}>+</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-right my -3 font-semibold text-green-800">Giá: {productInfo?.price} đ</p>
                    <hr />
                    <p className="text-right my -3 font-semibold text-red-500 text-2xl">Tổng tiền: {productInfo?.price * quantity} đ</p>
                    <div className="w-full h-[510px] p-8 border-2xl rounded shadow-lg shadow-gray-500/50 my-6">
                        <p className="text-center text-green-700 text-2xl font-bold">Thông tin người nhận</p>
                        <p>Tên người nhận <span className="text-red-600">* </span>:</p>
                        <Input
                            type={'text'}
                            val={name}
                            handleChange={handleChange}
                            placeholder={"Tên người nhận"}
                            className={"border-[1px] border-gray-500 w-full mb-3 mt-1 px-2 outline-none py-2 rounded"}
                            field={'name'}
                        />
                        {/* <input
                            type="text"
                            value={name}
                            onChange={(e) => handleChange(e.target.value, 'name')}
                            placeholder="Tên người nhận"
                            className="border-[1px] border-gray-500 w-full mb-3 mt-1 px-2 outline-none py-2 rounded"
                        /> */}
                        <p>Email <span className="text-red-600">* </span>:</p>
                        <Input
                            type={'text'}
                            val={email}
                            handleChange={handleChange}
                            placeholder={"Email"}
                            className={"border-[1px] border-gray-500 w-full mb-3 mt-1 px-2 outline-none py-2 rounded"}
                            field={'email'}
                        />
                        {/* <input
                            type="text"
                            value={email}
                            onChange={(e) => handleChange(e.target.value, 'email')}
                            placeholder="Email"
                            className="border-[1px] border-gray-500 w-full mb-3 mt-1 px-2 outline-none py-2 rounded"
                        /> */}
                        <p>Số điện thoại <span className="text-red-600">* </span>:</p>
                        <Input
                            type={'text'}
                            val={phone}
                            handleChange={handleChange}
                            placeholder={"Số điện thoại"}
                            className={"border-[1px] border-gray-500 w-full mb-3 mt-1 px-2 outline-none py-2 rounded"}
                            field={'phone'}
                        />
                        {/* <input
                            type="text"
                            value={phone}
                            onChange={(e) => handleChange(e.target.value, 'phone')}
                            placeholder="Số điện thoại"
                            className="border-[1px] border-gray-500 w-full mb-3 mt-1 px-2 outline-none py-2 rounded"
                        /> */}
                        <p>Địa chỉ nhận hàng <span className="text-red-600">* </span>:</p>
                        <Input
                            type={'text'}
                            val={address}
                            handleChange={handleChange}
                            placeholder={"Địa chỉ nhận hàng"}
                            className={"border-[1px] border-gray-500 w-full mb-3 mt-1 px-2 outline-none py-2 rounded"}
                            field={'address'}
                            isTextarea={true}
                            rows={3}
                        />
                        {/* <textarea
                            type="text"
                            rows={3}
                            value={address}
                            onChange={(e) => handleChange(e.target.value, 'address')}
                            placeholder="Địa chỉ nhận hàng"
                            className="border-[1px] border-gray-500 w-full mb-3 mt-1 px-2 outline-none py-2 rounded"
                        /> */}
                        <Button
                            handleClick={!isDisabled && handleOpenModal}
                            className={'w-[100px] p-3 m-auto'}
                            textStyle={"text-center text-white font-bold"}
                            btnText={"Đặt hàng"}
                            type={'primary'}
                            isDisabled={isDisabled}
                        />
                        {/* <div className={`w-[100px] p-3 bg-green-500 rounded m-auto ${isDisabled
                            ? 'bg-emerald-400 cursor-not-allowed'
                            : 'hover:bg-green-600 cursor-pointer '}`}
                            onClick={!isDisabled && handleOpenModal}
                        >
                            <p className="text-center text-white font-bold">Đặt hàng</p>
                        </div> */}
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                style={customStyles}
            >
                <div className="w-[700px]">
                    <div className="flex justify-between my-2">
                        <p className="text-lg font-bold text-red-500">Xác nhận thông tin</p>
                        <img className="w-6 h-6 hover:cursor-pointer" onClick={handleCloseModal} src={close} alt="" />
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <img className="w-[150px] h-[110px] border-2 my-2 rounded" src={productInfo?.image || productInfo?.images[0]} alt="" />
                        <div className="w-[70%] my-2">
                            <p className="text-lg font-bold">Thông tin sản phẩm</p>
                            <p>Tên sản phẩm: <span className="font-semibold">{productInfo?.name || productInfo.productName}</span></p>
                            <p>Hãng: <span className="font-semibold">{productInfo?.brand || productInfo.productBrand}</span></p>
                            <p>Số lượng: <span className="font-semibold">{quantity}</span></p>
                            <p>Tổng thanh toán: <span className="font-semibold text-red-500">{productInfo?.price * quantity} đ</span></p>
                            <p className="text-lg font-bold">Thông tin khách hàng</p>
                            <p>Tên khách hàng: <span className="font-semibold">{name}</span></p>
                            <p>Số điện thoại: <span className="font-semibold">{phone}</span></p>
                            <p>Email: <span className="font-semibold">{email}</span></p>
                            <p>Địa chỉ nhận hàng: <span className="font-semibold">{address}</span></p>
                        </div>
                    </div>
                    <hr />
                    <Button
                        handleClick={handleBuyProduct}
                        className={"my-2 w-[100px] p-3 m-auto"}
                        textStyle={"text-center text-white"}
                        btnText={"Mua hàng"}
                        type={'primary'}
                    />
                    {/* <div className="my-2 w-[100px] p-3 bg-green-500 rounded m-auto cursor-pointer hover:bg-green-700">
                        <p className="text-center text-white" onClick={handleBuyProduct}>Mua hàng</p>
                    </div> */}
                </div>
            </Modal>
        </div>
    )
}




export default Buy