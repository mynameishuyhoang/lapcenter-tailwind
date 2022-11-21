import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
    const navigate = useNavigate()
    return (
        <div className='w-[220px] h-[330px] p-[10px] bg-sky-100 rounded-lg shadow-lg shadow-gray-500/50 m-5 hover:shadow-violet-500/50'>
            <img src="https://fptshop.com.vn/Uploads/images/2015/0511/Lenovo-IdeaPad-Gaming-3-fpt-1.jpg"
                alt="" className='w-[200px] h-[140px]' />
            <div>
                <p className='font-medium text-xl'>{item.productName}</p>
                <p className='font-medium text-xl'>{item.productBrand}</p>
                <p className='font-medium text-xl'>{item.chip}</p>
                <p className='font-medium text-xl'>{item.price}</p>
            </div>
            <div onClick={() => navigate('/product/1')}
                className='w-[160px] p-2 bg-green-400 rounded-xl my-2 m-auto hover:bg-green-700 hover:cursor-pointer'>
                <p className='text-center font-medium text-lime-50' >Xem sản phẩm</p>
            </div>
        </div>

    )
}


export default ProductCard