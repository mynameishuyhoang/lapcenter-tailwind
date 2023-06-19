import axios from "axios";
import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import Loader from "../../components/loader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const History = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const navigate = useNavigate();

    const handleGetAllProductInHistory = () => {
        setLoading(true)
        axios.get(`https://lapcenter-v1.onrender.com/api/history/${localStorage.getItem('userId')}`, {

        })
            .then(function (response) {
                console.log("success")
                setLoading(false)
                setData(response?.data?.products)
                console.log(response?.data?.products);
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    useEffect(() => {
        handleGetAllProductInHistory()
    }, [])

    return (
        <div>
            <Navbar />
            {loading
                ? <Loader loading={loading} />
                : <div>
                    <p className="text-center my-5 font-semibold text-xl">Lịch sử mua hàng của <span className="text-green-400">{localStorage.getItem('name')}</span></p>
                    <div className="mx-20">
                        {data?.length === 0
                            ?
                            <div>
                                <p className="text-xl font-semibold text-center">Bạn chưa mua sản phẩm nào.</p>
                                <div className="m-auto bg-green-400 w-40 rounded my-4 p-2 cursor-pointer hover:bg-green-600"
                                    onClick={() => navigate('/')}
                                >
                                    <p className="text-center text-white">Chọn để đi mua hàng</p>
                                </div>
                            </div>
                            :
                            <table class="table-fixed w-full">
                                <thead>
                                    <tr className="text-left border-b-[1px] border-black">
                                        <th className="w-[40%]">Tên sản phẩm</th>
                                        <th className="w-[20%]">Hãng</th>
                                        <th className="w-[20%]">Số lượng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((item) => (
                                        <tr className="border-b-[1px] border-gray-200">
                                            <td className="py-2">{item?.productName}</td>
                                            <td className="py-2">{item?.productBrand}</td>
                                            <td className="py-2 text-red-500">{item?.quantity}</td>
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

export default History