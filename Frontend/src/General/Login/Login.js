import React, { useEffect } from 'react';
import Header from './component/Header';
import Footer from '../../Employee/GeneralComponents/component/Footer';
import LoginForm from './component/LoginForm';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate();
    useEffect(() => {
        if(!sessionStorage.getItem('auth')){
            navigate('/');
        }
    })
    return (
        <div>
            <Header />
            <LoginForm />
            <Footer />
        </div>
    );
}

export default Login;