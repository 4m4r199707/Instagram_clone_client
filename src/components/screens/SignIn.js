import React from 'react';
import {Link} from 'react-router-dom'

const SignIn = () => {
    return (
        <div className='mycard'>
            <div className="card auth-card input-field">
                <h2 className='brand-logo' >Instagram</h2>
                <input type="text" placeholder="email / Username" />
                <input type="text" placeholder="password" />
                
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1">Login</button>
                <h6>
                    <Link to='signup'>Don't have an account ?</Link>
                </h6>
            </div>
        </div>
    );
};

export default SignIn;