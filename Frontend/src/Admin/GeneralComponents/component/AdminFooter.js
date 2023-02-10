import React from 'react';
import classes from '../style/AdminFooter.module.css';
import { BiCopyright } from 'react-icons/bi';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function AdminFooter(props) {
    const linkStyle = {
        'color':'white'
    }
    return (
        <div>
            <div className={classes.line}></div>
            <div className={classes.footer}>
                <div className={classes.copyright}>
                    Copyright <BiCopyright /> 2023 Axis SARAL
                </div>
                <div className={classes.social}>
                    <span><Link to='/facebook.com'><FaFacebook color='white' /></Link></span>
                    <span><Link to='/twitter.com'><FaTwitter color='white' /></Link></span>
                    <span><Link to='/instagram.com'><AiFillInstagram color='white' /></Link></span>
                    <span><Link to='/linkedin.com'><FaLinkedin color='white' /></Link></span>
                </div>
                <div className={classes.terms}>
                    <span><Link to='/privacy-policy' style={linkStyle}>Privacy Policy</Link></span>
                    <span><Link to='/terms' style={linkStyle}>Terms of Use</Link></span>
                </div>
            </div>
            <div className={classes.line}></div>
        </div>
    );
}

export default AdminFooter;