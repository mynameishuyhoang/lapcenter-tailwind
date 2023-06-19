import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
// import { useState } from "react";
import home from '../../assets/image/home.png';
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";


const Register = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const[name, setUsername] = useState('')
    const[email, setEmail] = useState('')
    const[phone, setPhone] = useState('')
    const[password, setPassword] = useState('')


    const handleChange = (val, field) => {
        switch (field) {
            case 'name':
                setUsername(val)
                break;
            case 'password':
                setPassword(val)
                break;
            case 'email':
                setEmail(val)
                break;
            case 'phone':
                setPhone(val)
                break;
            default:
                break;
        }
    }

    const handleSubmitRegister = () => {
        setLoading(true)
        axios.post('https://lapcenter-v1.onrender.com/api/register', {
            name: name,
            email: email,
            phone: phone,
            isAdmin: false,
            password: password
        })
            .then(function (response) {
                console.log(response);
                navigate('/login')
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
                alert("Đăng ký tài khoản không thành công. Vui lòng thử lại.")
                setLoading(false)

            });
    }

    return(
        <div className="w-screen h-screen bg-sky-300 flex items-center justify-center">
            <div className="w-[600] h-auto bg-white shadow-lg shadow-gray-500/50 rounded">
                <Link to='/'>
                    <img className='w-8 h-8 rounded-3xl m-3 cursor-pointer' src={home} alt="home" />
                </Link>
                <h1 className="text-center font-bold text-3xl my-5">Đăng ký</h1>
                <div className="w-[300] mx-[150px] border-b-2 border-green-500"></div>
                <div className="p-8">
                    <div className="flex py-2">
                        <p className=" w-[200px]">Username: </p>
                        <input type="text" className="w-[300px] border-[2px] border-gray-500 bg-white outline-none rounded"
                        value={name}
                        onChange={(e) => handleChange(e.target.value, 'name')}
                        />
                    </div>
                    <div className="flex w-[100%] py-2">
                        <p className=" w-[200px]">Password: </p>
                        <input type="password" className="w-[300px] border-[2px] border-gray-500 bg-white outline-none rounded"
                        value={password}
                        onChange={(e) => handleChange(e.target.value, 'password')}
                        />
                    </div>
                    <div className="flex w-[100%] py-2">
                        <p className="w-[200px]">Email: </p>
                        <input type="text" className="w-[300px] border-[2px] border-gray-500 bg-white outline-none rounded"
                        value={email}
                        onChange={(e) => handleChange(e.target.value, 'email')}
                        />
                    </div>
                    <div className="flex w-[100%] py-2">
                        <p className="w-[200px]">Phone number: </p>
                        <input type="text" className="w-[300px] border-[2px] border-gray-500 bg-white outline-none rounded"
                        value={phone}
                        onChange={(e) => handleChange(e.target.value, 'phone')}
                        />
                    </div>
                    
                    <div className="w-[100px] bg-green-500 m-auto my-4 p-2 rounded hover:bg-green-700"
                    onClick={handleSubmitRegister}
                    >{loading?
                        <div className="flex justify-center">
                        <ClipLoader color="white" size={20} loading={loading}/>
                        </div>:
                        <p className="text-center text-white font-semibold">Đăng ký</p>
                    }
                    </div>
                    <div className="flex">
                        <p className="font-bold text-sm">Bạn đã có tài khoản?</p>
                        <p className="px-1 text-sm hover:text-red-500 cursor-pointer"
                        onClick={() => navigate('/login')}>
                            Đăng nhập.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register