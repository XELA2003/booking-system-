import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './ForgotPasswordPage.css';

const ForgotForm = () => (
    <div className="forgot-form">
        <h2 className="forgot-title">Forgot your password ?</h2>
        <div className="forgot-text">
            <p class="forgot-instructions">
                Enter your email address and we will send you instructions to reset your password.
            </p>
        </div>
        <input type="email" placeholder="Email" />
        <button className="Continue-btn">Continue</button>
        <p className='return-login'><Link to="/login">Return to login</Link></p>
    </div>
);

export default ForgotForm