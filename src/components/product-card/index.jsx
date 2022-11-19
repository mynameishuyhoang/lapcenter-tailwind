import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
    const navigate = useNavigate()
    return (
        <div className="flex ">
            <div className='w-[220px] h-[330px] p-[10px] bg-sky-100 rounded-lg shadow-lg shadow-gray-500/50 m-5 hover:shadow-violet-500/50'>
                <img src="https://fptshop.com.vn/Uploads/images/2015/0511/Lenovo-IdeaPad-Gaming-3-fpt-1.jpg"
                    alt="" className='w-[200px] h-[140px]' />
                <div>
                    <p className='font-medium text-xl'>Laptop abc</p>
                    <p className='font-medium text-xl'>Hãng: Lenovo</p>
                    <p className='font-medium text-xl'>Chip: Intel core-i7</p>
                    <p className='font-medium text-xl'>Giá: 1000000 VND</p>
                </div>
                <div onClick={() => navigate('/product/1')}
                className='w-[160px] p-2 bg-green-400 rounded-xl my-2 m-auto hover:bg-green-700 hover:cursor-pointer'>
                    <p className='text-center font-medium text-lime-50' >Xem sản phẩm</p>
                </div>
            </div>
            <div className='w-[220px] h-[330px] p-[10px] bg-sky-100 rounded-lg shadow-lg shadow-gray-500/50 m-5 hover:shadow-violet-500/50'>
                <img src="https://fptshop.com.vn/Uploads/images/2015/0511/Lenovo-IdeaPad-Gaming-3-fpt-1.jpg"
                    alt="" className='w-[200px] h-[140px]' />
                <div>
                    <p className='font-medium text-xl'>Laptop abc</p>
                    <p className='font-medium text-xl'>Hãng: Lenovo</p>
                    <p className='font-medium text-xl'>Chip: Intel core-i7</p>
                    <p className='font-medium text-xl'>Giá: 1000000 VND</p>
                </div>
                <div onClick={() => navigate('/product/2')}
                className='w-[160px] p-2 bg-green-400 rounded-xl my-2 m-auto hover:bg-green-700 hover:cursor-pointer'>
                    <p className='text-center font-medium text-lime-50 '>Xem sản phẩm</p>
                </div>
            </div>
        </div>

    )
}


export default ProductCard