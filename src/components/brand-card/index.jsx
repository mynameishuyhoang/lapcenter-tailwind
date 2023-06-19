import React from "react";
import { useNavigate } from "react-router-dom";

const BrandCard = ({ item }) => {
    const navigate = useNavigate()
    return (
        <div  onClick={() => navigate(`/product/${item?._id}`,{state: 
            {
                id: item._id, 
                brand: item.brand
            }})} className='w-[220px] h-[230px] p-[10px] bg-sky-100 rounded-lg shadow-lg shadow-gray-500/50 m-5 hover:shadow-violet-500/50 cursor-pointer'
        title={item.name}>
            <img src={item?.images?.length && item?.images[0]}
                alt="" className='w-[200px] h-[140px]' />
            <div>
                <p className='font-medium text-xl truncate'>{item.name}</p>

                <p className=' text-xl truncate flex'>
                    Giá: <p className="text-red-400">{item.price} VNĐ</p></p>
            </div>
            
        </div>

    )
}


export default BrandCard