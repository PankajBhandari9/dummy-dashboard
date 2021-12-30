import React from 'react'

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <h1 className='display-3 fw-bold'>Contact Us</h1>
            <h3 >Know all the places where you can find us.</h3>

            <form className='shadow-lg rounded my-5 p-5 row' onSubmit={handleSubmit}>
                <div className="col-md-6">

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                </div>
                <div className="col-md-6">

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input required type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                </div>

                <div className="col">
                    <div class="input-group mb-4 ">
                        <span class="input-group-text">Comment</span>
                        <textarea required class="form-control" aria-label="With textarea"></textarea>
                    </div>
                </div>

                <div className="col-md-12">
                    <button type="submit" className="btn btn-outline-dark shadow col-md-12">Submit</button>
                </div>
            </form>


        </div>
    )
}

export default Contact
