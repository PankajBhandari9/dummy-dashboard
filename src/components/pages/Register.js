import React from 'react'

const Register = () => {
    const handleRegisterSub = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <h1 className='display-3 fw-bold mb-3'>Register Form</h1>
            <form onSubmit={handleRegisterSub}>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Eg- xyz@abc.com'/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail2" className="form-label">Re-Enter Email Address</label>
                    <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder='Re-Enter Email' />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Re-Enter Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder='Re-Enter Password'/>
                </div>

                <div className='mb-3'>
                    Gender
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Female
                        </label>
                    </div>
                </div>

                <div>
                    <label className='form-label' htmlFor='mobile'>Mobile Number</label>
                        <input type="number" className='form-control mb-3' id='mobile' placeholder='Enter Mobile Number' />
                    
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Register
