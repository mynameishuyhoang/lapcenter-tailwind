import React from "react";
import pagenotfound from '../../assets/image/pagenotfound.png'
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    
    const navigate = useNavigate()

    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div>
                <img src={pagenotfound} alt="not-found" className="w-[400px] h-auto"/>
                <p className="my-4 font-bold text-2xl text-center">Page Not Found</p>
                <div className="w-[100px] bg-green-500 m-auto my-4 p-2 rounded hover:bg-green-700 cursor-pointer"
                    onClick={() => navigate('/')}>
                        <p className="text-center text-white font-semibold">Go Home</p>
                </div>
            </div>
        </div>
    )
}


export default PageNotFound