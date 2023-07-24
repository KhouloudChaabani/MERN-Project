import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const LandingPage = (props) => {
    const navigate = useNavigate()
    const [register, setRegister] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: ''
    })
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        register: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        login: {
            email: '',
            password: ''
        }

    })
    // handel onChange for register inputs
    const handleRegisterChange = (e) => {
        e.preventDefault();
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })
    }
    // handel onChange for login inputs
    const handleLoginChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }
    // handel onSubmit for register inputs
    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/register', register,{withCredentials: true})
            .then(res => {
                console.log(res)
                setRegister({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    role: ''
                })
                props.setUserName(res.data.user.firstName)
                props.setUser(res.data.user)
                navigate('/movies')
            })
            .catch(err => {
                console.log("Error : ", err.response.data)
                setErrors({
                    ...errors,
                    register: err.response.data
                })
            })
    }

    // handel onSubmit for login inputs
    const handleLoginSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', login,{withCredentials: true})
            .then(res => {
                console.log("cookie", document.cookie)
                console.log("user name : ", res.data.userFromDB.firstName)
                props.setUserName(res.data.userFromDB.firstName)
                props.setUser(res.data.userFromDB)
                navigate('/movies')

            })
            .catch(err => {
                console.log("Error : ", err.response.data)
                setErrors({
                    ...errors,
                    login: err.response.data

                })
                console.log("Error : ", errors.login)
            }
            )
    }

    return (
        <div>
            <div className='container'>
                <div className="row mt-3">
                    <div className="register col bg-light">
                        <h2>Register</h2>
                        {errors.register ? Object.entries(errors.register).map(([key, value], index) => value ? <p style={{ color: "red" }}>{value.message}</p> : null) : null}
                        <form onSubmit={handleRegisterSubmit} className="col-12" >
                            <div className="mb-3">
                                <label className="form-label"   >First Name</label>
                                <input className="form-control" type='text' name='firstName' value={register.firstName} onChange={handleRegisterChange} />

                            </div>
                            <div className="mb-3">
                                <label className="form-label"       >Last Name</label>
                                <input className="form-control" type='text' name='lastName' value={register.lastName} onChange={handleRegisterChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"      >Email</label>
                                <input className="form-control" type='email' name='email' value={register.email} onChange={handleRegisterChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"       >Password</label>
                                <input className="form-control" type='password' name='password' value={register.password} onChange={handleRegisterChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"     >Confirm Password</label>
                                <input className="form-control" type='password' name='confirmPassword' value={register.confirmPassword} onChange={handleRegisterChange} />
                            </div>
                            <div className="mb-3">
                            <label className="form-label">Role</label>
                                <select id="lang" onChange={handleRegisterChange} value={register.role} className="form-control" name='role'>
                                    <option value="client">Client</option>
                                    <option value="lawyer">Lawyer</option>
                                </select> <br />
                            </div>
                            <button type='submit' className='btn btn-primary'>Register</button>
                        </form>

                    </div>
                    <div className="col-3" ></div>
                    <div className="login col bg-light"  >

                        <h2> Login </h2>
                        <form onSubmit={handleLoginSubmit} >
                            <div className="mb-3">
                                {errors.login ? <p style={{ color: "red" }}>{errors.login.error}</p> : null}
                                <label className="form-label" >Email</label>
                                <input className="form-control" type='email' name='email' value={login.email} onChange={handleLoginChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label"  >Password</label>
                                <input className="form-control" type='password' name='password' value={login.password} onChange={handleLoginChange} />

                            </div>
                            <button type='submit' className='btn btn-primary'>Login</button>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default LandingPage