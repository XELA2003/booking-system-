import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './RegisterPage.css';
const RegisterForm = () => (
    <div className="register-form">
        <div className='register-title'>
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Register</h2>
        </div>
        <div className='register-inputs'>
            <input type="text" placeholder="E-mail" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm password" />
        </div>
        <button className="create-account-btn">Create my account</button>
        <div className="register-form-footer">
            <p>Already have an account ? Click <Link to="/login">here</Link></p>
        </div>

    </div>
);

export default RegisterForm