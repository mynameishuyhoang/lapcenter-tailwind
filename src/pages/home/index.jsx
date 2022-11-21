import React from "react";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/product-card";
import Slider from "../../components/slider";
import { fakeData } from "./data";
import { useState } from "react";

const Home = () => {
    const[search, setSearch] = useState('')
    const[data, setData] = useState(fakeData)

    const handleSearch = (value) =>{
        if(value){
            setSearch(value)
        }
        else{
            setSearch(value)
            setData(fakeData)
        }
    }

    const handleSubmitSearch = () => {
        setData(
            fakeData.filter((item) => item.productName.toLowerCase().includes(search.toLowerCase()))
        )
    }
    return(
        <div className="homeContainer">
            <Navbar/>
            <div className="mx-10 my-5 min-w[525px] ">
                <Slider/>
                <div className="flex my-5 justify-end">
                    <div className="flex">
                        <input className="border-gray-300 border-2 rounded outline-none"
                         type="text" 
                         placeholder="Nhập tên sản phẩm"
                         value={search} onChange={(e) => handleSearch(e.target.value)}
                         />
                        <div onClick={handleSubmitSearch}
                        className="rounded bg-green-600 hover:bg-green-700 cursor-pointer text-white p-2">Tìm kiếm</div>
                    </div>
                    <div className="flex mx-10">
                        <p className="mt-2 mr-1">Hãng</p>
                        <select name="" id="" className="border-gray-300 border-2 rounded w-[140px]">
                            <option value="">Asus</option>
                            <option value="">Acer</option>
                            <option value="">Lenovo</option>
                            <option value="">Dell</option>
                        </select>
                    </div>
                    <div className="flex">
                        <p className="mt-2 mr-1">Giá</p>
                        <select name="" id="" className="border-gray-300 border-2 rounded">
                                <option value="">Từ thấp đến cao</option>
                                <option value="">Từ cao đến thấp</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data.map((item) => (
                        <ProductCard item={item}/>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Home