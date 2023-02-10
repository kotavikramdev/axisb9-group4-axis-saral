import React, { useEffect, useState } from 'react';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from 'react-router-dom';
// import { IoIosNotifications } from 'react-icons/io';
import classes from '../style/Header.module.css';

function Header(props) {
    const navigate = useNavigate();
    const [logout, setLogout] = useState(false);

    // Logout Handler 
    const handleLogout = (event) => {
        event.preventDefault();
        sessionStorage.removeItem('auth');
        // sessionStorage.removeItem('jwtToken');
        // sessionStorage.removeItem('employeeId');
        // sessionStorage.removeItem('currentProjectId');
        sessionStorage.setItem("logout", true);
        setLogout(true);
    }
    useEffect(() => {
        if (!sessionStorage.getItem('auth') && sessionStorage.getItem("logout")) {
            navigate('/home');
        };
    }, [logout]);
    return (
        <div>
            <div>
                <div className={classes.line}></div>
                <div className={classes.header}>
                    <Link to='/dashboard'><img src={require('../../../Images/Logo.png')} alt='Axis SARAL Logo' className={classes.logo} /></Link>
                    <div className={classes.mainlinks}>
                        <ButtonGroup>
                            <Dropdown
                                as={ButtonGroup}
                                id={`dropdown-button-drop-down-centered`}
                                drop={'down-centered'}
                            >
                                <Dropdown.Toggle id="dropdown-basic" variant='secondary' size='lg'>
                                    Explore Products
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <div className={classes.exploreproduct}>
                                        <Dropdown.Item href="/products/accounts" size='lg'><div className={classes.exploreproducttext}><b>Accounts</b></div></Dropdown.Item>
                                        <Dropdown.Item href="/products/cards" size='lg'><div className={classes.exploreproducttext}><b>Cards</b></div></Dropdown.Item>
                                        <Dropdown.Item href="/products/deposits" size='lg'><div className={classes.exploreproducttext}><b>Deposits</b></div></Dropdown.Item>
                                        <Dropdown.Item href="/products/insurances" size='lg'><div className={classes.exploreproducttext}><b>Insurances</b></div></Dropdown.Item>
                                        <Dropdown.Item href="/products/investments" size='lg'><div className={classes.exploreproducttext}><b>Investments</b></div></Dropdown.Item>
                                        <Dropdown.Item href="/products/loans" size='lg'><div className={classes.exploreproducttext}><b>Loans</b></div></Dropdown.Item>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Link to='/projects'><Button variant='outline-light' size='lg'>Projects</Button></Link>
                            <Link to='/docs'><Button variant='outline-light' size='lg'>Docs</Button></Link>
                            <Link to='/peers'><Button variant='outline-light' size='lg'>Peers</Button></Link>
                        </ButtonGroup>
                    </div>
                    <div className={classes.personlinks}>
                        {/* <Link className={classes.notification} to='/notifications'><IoIosNotifications size={'lg'} /></Link> */}
                        <div>
                            <Dropdown
                                as={ButtonGroup}
                                id={`dropdown-button-drop-down-centered`}
                                drop={'down-centered'}
                            >
                                <Dropdown.Toggle id="dropdown-basic" variant='secondary' size='lg'>
                                    {sessionStorage.getItem('employeeName')}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <div className={classes.personlink}>
                                        <Dropdown.Item href="/profile" size='lg'><div className={classes.personlinktext}><b>My Profile</b></div></Dropdown.Item>
                                        {/* <Dropdown.Item href="/my-feeds" size='lg'><div className={classes.personlinktext}><b>My Feed</b></div></Dropdown.Item> */}
                                        <Dropdown.Item href="/update-profile" size='lg'><div className={classes.personlinktext}><b>Update Profile</b></div></Dropdown.Item>
                                        <Dropdown.Item href="/update-password" size='lg'><div className={classes.personlinktext}><b>Change Password</b></div></Dropdown.Item>
                                        <Dropdown.Item size='lg' onClick={handleLogout}><div className={classes.personlinktext}><b>Logout</b></div></Dropdown.Item>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className={classes.line}></div>
            </div>
        </div>
    );
}

export default Header;