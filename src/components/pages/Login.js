import React from 'react'

const Login = () => {
    const handleLogin=(e)=>{
        e.preventDefault();
    }
    return (
        <div>
        <h1 className='display-3 fw-bold mb-5'>Login User</h1>
            <form onSubmit={handleLogin} className='my-5'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                
                <button type="submit" className="btn btn-primary mb-3">Submit</button>
            </form>

        </div>
    )
}

export default Login
