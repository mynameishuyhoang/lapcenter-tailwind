import React from "react";
import HashLoader from 'react-spinners/HashLoader';


const Loader = ({ loading }) => {
    return(
        <div className="flex items-center justify-center w-screen h-screen">
            <HashLoader color="blue" loading={loading} /> 
        </div>
    )

}


export default Loader