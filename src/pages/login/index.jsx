import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import ClipLoader from 'react-spinners/ClipLoader';
import home from '../../assets/image/home.png';

// const fakeAccount = {
//     username: 'admin',
//     password: 'admin',
// }

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)


    const handleChange = (val, field) => {
        if (field === 'username') {
            setUsername(val)
        }
        else {
            setPassword(val)
        }
    }

    // const handleLogin = () => {
    //     if(username === fakeAccount.username && password === fakeAccount.password){
    //         navigate('/')
    //     }
    //     else {
    //         alert("Tài khoản hoặc mật khẩu không chính xác. Vui lòng thử lại")
    //     }
    // }

    const handleSubmitLogin = () => {
        setLoading(true)
        axios.post('https://lapcenter-v1.onrender.com/api/login', {
            username: username,
            password: password
        })
            .then(function (response) {
                console.log(response);
                navigate('/')
                setLoading(false)
                localStorage.setItem('name', response.data.userName)
                localStorage.setItem('userId', response.data.userId)
                localStorage.setItem('isAdmin', response.data.isAdmin)
            })
            .catch(function (error) {
                console.log(error);
                alert("Tài khoản hoặc mật khẩu không chính xác. Vui lòng thử lại")
                setLoading(false)

            });
    }

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log('do validate');
            handleSubmitLogin()
        }
    }



    return (
        <div className="w-screen h-screen bg-sky-200 flex items-center justify-center">
            <div className="w-[500px] h-auto bg-white shadow-lg shadow-gray-500/50 rounded	">
                <Link to='/'>
                    <img className='w-8 h-8 rounded-3xl m-3 cursor-pointer' src={home} alt="home" />
                </Link>
                <h1 className="text-center font-bold text-3xl my-5">Đăng nhập</h1>
                <div className="w-[200px] mx-[150px] border-b-2 border-green-500"></div>
                <div className="p-8">
                    <p className="font-semibold py-2">Username: </p>
                    <input type="text" className="w-full border-[2px] border-green-500 bg-white outline-none rounded"
                        value={username}
                        onChange={(e) => handleChange(e.target.value, 'username')}
                    />
                    <p className="font-semibold py-2">Password: </p>
                    <input type="password" className="w-full border-[2px] border-green-500 bg-white outline-none rounded"
                        value={password}
                        onChange={(e) => handleChange(e.target.value, 'password')}
                        onKeyDown={_handleKeyDown}
                    />
                    <div className="w-[100px] bg-green-500 m-auto my-4 p-2 rounded hover:bg-green-700"
                        onClick={handleSubmitLogin}
                    >{loading ?
                        <div className="flex justify-center" >
                            <ClipLoader color="white" size={20} loading={loading} />
                        </div> :
                        <p className="text-center text-white font-semibold cursor-pointer">Login</p>
                        }
                    </div>
                    <div className="flex">
                        <p className="font-bold text-sm">Bạn chưa có tài khoản?</p>
                        <p className="px-1 text-sm hover:text-red-500 cursor-pointer"
                            onClick={() => navigate('/register')}>
                            Đăng ký.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login