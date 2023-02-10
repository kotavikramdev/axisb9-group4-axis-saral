import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import classes from '../style/Header.module.css';

function Header(props) {
    return (
        <div>
            <div>
                <div className={classes.line}></div>
                <div className={classes.header}>
                    <div>
                    <Link to='/home'><img src={require('../../../Images/Logo.png')} alt='Axis SARAL Logo' className={classes.logo} /></Link>
                    </div>
                    <div className={classes.projectname}>
                        <h1>Axis SARAL</h1>
                    </div>
                    <div className={classes.homebutton}>
                        <Link to='/login'><Button size='lg' variant='outline-light'><b>Login</b></Button></Link>
                    </div>
                </div>
                <div className={classes.line}></div>
            </div>
        </div>
    );
}

export default Header;