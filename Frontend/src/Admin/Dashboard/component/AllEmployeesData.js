import React, { useEffect, useState } from 'react';
import classes from '../style/AllEmployeesData.module.css';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import axios from 'axios';
import EmployeeImage from './EmployeeImage';
import { Link } from 'react-router-dom';

function AllEmployeesData(props) {
    const token = sessionStorage.getItem('jwtToken');
    const [allEmployeesData, setAllEmployeesData] = useState(null);
    const baseUrl = 'http://localhost:8711';

    // All Employees Data
    async function getAllEmployeesData() {
        await axios.get(
            `${baseUrl}/employees`,
            {
                'headers': {
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then((response) => {
            // console.log(response.data);
            setAllEmployeesData(response.data);
        }).catch((error) => {
            console.log(error.response.data);
        })
    }

    useEffect(() => {
        getAllEmployeesData();
    }, []);

    if (allEmployeesData === null) {
        return (<div></div>);
    }
    return (
        <div>
            <div className={classes.employees}>
                <Card className={classes.employeecard}>
                    <Card.Header><span className={classes.employeecardheader}>All Employees</span></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {allEmployeesData.map(employee => {
                                if(employee['employeeName'] === "Administrator") {
                                    return null;
                                }
                                return (
                                    <div className={classes.employee}>
                                        <EmployeeImage employeeId={employee['employeeId']} designation='Profile' />
                                        {/* <img src={require('../../../Images/ProfileImage.png')} alt='Profile' /> */}
                                        <div>
                                            <h5>{employee['employeeName']}</h5>
                                            <h6>{employee['designation']}</h6>
                                        </div>
                                    </div>
                                );
                            })}
                        </Card.Text>
                        <Link to='/admin-peers'><Button variant='outline-secondary'><b>Explore Peers</b></Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default AllEmployeesData;