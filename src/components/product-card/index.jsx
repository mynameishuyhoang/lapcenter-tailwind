import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
    const navigate = useNavigate()
    return (
        <div className='w-[220px] h-[330px] p-[10px] bg-sky-100 rounded-lg shadow-lg shadow-gray-500/50 m-5 hover:shadow-violet-500/50'>
            <img src={item?.images[0]}
                alt="" className='w-[200px] h-[140px]' />
            <div>
                <p className='font-medium text-xl truncate'>{item.name}</p>
                <p className=' text-xl truncate flex'>
                    Hãng: <p className="">{item.brand}</p></p>
                <p className=' text-xl truncate flex'>
                    CPU: <p className="">{item.cpu}</p></p>
                <p className=' text-xl truncate flex'>
                    Giá: <p className="text-red-400">{item.price} VNĐ</p></p>
            </div>
            <div 
                onClick={() => navigate(`/product/${item?._id}`,{
                    state: {
                        id: item._id, 
                        brand: item.brand
                    }
                },
                )}
                // onClick={() => navigate('/product/1')}
                className='w-[160px] p-2 bg-green-400 rounded-xl my-2 m-auto hover:bg-green-700 hover:cursor-pointer'>
                <p className='text-center font-medium text-lime-50' >Xem sản phẩm</p>
            </div>
        </div>

    )
}


export default ProductCard