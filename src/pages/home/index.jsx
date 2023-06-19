import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/product-card";
import Slider from "../../components/slider";
import Loader from "../../components/loader";
// import { fakeData } from "./data";
import ReactPaginate from 'react-paginate';
import { useState } from "react";
import './style.css'
import axios from "axios";

const Home = () => {
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    const [brand, setBrand] = useState('')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalpage, setTotalpage] = useState(0)

    // const handleSubmitSearch = () => {
    //     setData(
    //         fakeData.filter((item) => item.productName.toLowerCase().includes(search.toLowerCase()))
    //     )
    // }

    const handleSearching = (productName, productBrand, sortPrice) => {
        setLoading(true)
        axios.get(`https://lapcenter-v1.onrender.com/api/product`, {
            params: {
                productName: productName,
                productBrand: productBrand,
                orderByDirection: sortPrice,
                orderByColumn: 'price',
                pageSize: 4,
                pageNumber: 1,
            }
        })
            // axios.get(`https://lapcenter-v1.onrender.com/api/product?productName=${productName}&productBrand=${productBrand}&orderByDirection=${sortPrice}&orderByColumn=price`)
            .then(function (response) {
                setData(response.data.products)
                setLoading(false)
                setTotalpage(response.data.totalPage)
            })
            .catch(function (error) {
                setLoading(false)
            })
    }

    const handlePagination = (productName, productBrand, sortPrice, pageNumber) => {
        setLoading(true)
        axios.get(`https://lapcenter-v1.onrender.com/api/product`, {
            params: {
                productName: productName,
                productBrand: productBrand,
                orderByDirection: sortPrice,
                orderByColumn: 'price',
                pageSize: 4,
                pageNumber: pageNumber,
            }
        })
            .then(function (response) {
                setData(response.data.products)
                setLoading(false)
            })
            .catch(function (error) {
                setLoading(false)
            })
    }

    const handleChangePage = (pageNumber) => {
        console.log("PAGE: ", pageNumber);
        handlePagination(search, brand, sort, pageNumber)
    }

    const handleSearch = (value) => {
        setSearch(value)
        // handleSearching(value, brand, sort)
    }

    const handleFilterBrand = (value) => {
        // setData(
        //     fakeData.filter((item) => item.productBrand?.toLowerCase().includes(value?.toLowerCase()))
        // )
        setBrand(value)
        handleSearching(search, value, sort)
    }

    const handleSortPrice = (value) => {
        setSort(value)
        handleSearching(search, brand, value)
    }

    const handleSearchingProductName = () => {
        handleSearching(search, brand, sort)
    }

    // const fetchAPI = () => {
    //     fetch('https://lapcenter-v1.onrender.com/api/product')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log('data: ', data)
    //             setData(data.products)
    //         })
    //         .catch((error) => console.log(error))
    // }

    // const fetchAPIaxios = () => {
    //     setLoading(true)
    //     axios.get('https://lapcenter-v1.onrender.com/api/product')
    //         .then(function (response) {
    //             // handle success
    //             console.log('response:', response)
    //             setData(response.data.products)
    //             setLoading(false)
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //             setLoading(false)
    //         })
    // }

    useEffect(() => {
        // fetchAPI()
        // fetchAPIaxios()
        handleSearching('', '', '')
    }, [])

    return (
        <div className="homeContainer">
            <Navbar />
            <div className="mx-10 my-5 min-w[525px] ">
                {localStorage.getItem('name') &&
                    <p className="text-right font-semibold mb-2">Xin chào: {localStorage.getItem('name')}</p>
                }
                <Slider />
                <div className="flex justify-end">
                    <div className="flex">
                        <input className="border-gray-300 border-2 rounded outline-none px-2"
                            type="text"
                            placeholder="Nhập tên sản phẩm"
                            value={search} onChange={(e) => handleSearch(e.target.value)}
                        />
                        <div onClick={handleSearchingProductName}
                            className="rounded bg-green-600 hover:bg-green-700 cursor-pointer text-white p-2">Tìm kiếm</div>
                    </div>
                    <div className="flex mx-10">
                        <p className="mt-2 mr-1">Hãng</p>
                        <select name="" id="" className="border-gray-300 border-2 rounded w-[140px]"
                            onChange={(e) => handleFilterBrand(e.target.value)}
                        >
                            <option value="">Tất cả</option>
                            <option value="asus">Asus</option>
                            <option value="acer">Acer</option>
                            <option value="lenovo">Lenovo</option>
                            <option value="dell">Dell</option>
                        </select>
                    </div>
                    <div className="flex">
                        <p className="mt-2 mr-1">Giá</p>
                        <select name="" id="" className="border-gray-300 border-2 rounded"
                            onChange={(e) => handleSortPrice(e.target.value)}
                        >
                            <option value="">Tất cả</option>
                            <option value="asc">Từ thấp đến cao</option>
                            <option value="desc">Từ cao đến thấp</option>
                        </select>
                    </div>
                </div>
                {loading ?
                    <Loader /> :
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10 pb-20">
                        {data.map((item) => (
                            <ProductCard key={item._id} item={item} />
                        ))}
                    </div>
                }
            </div>
            <div className="pagination">
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    // breakClassName={"break-me"}
                    pageCount={totalpage}
                    // marginPagesDisplayed={2}
                    // pageRangeDisplayed={4}
                    onPageChange={(e) => handleChangePage(e.selected + 1)}
                    containerClassName={"pagination"}
                    // subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />
            </div>
        </div>
    )
}

export default Home