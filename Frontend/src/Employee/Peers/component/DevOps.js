
import classes from '../style/Developer.module.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeImage from './EmployeeImage';

function DevOps(props) {
    const [employeeData, setEmployeeData] = useState(null);
    const [filtedData, setFilterData] = useState([]);
    const [employeeParam, setEmployeeParam] = useState("");
    const baseUrl = 'http://localhost:8710';
    const styleHeading = {
        'color': '#d8345a',
        // 'fontWeight': 'bold'
    }
    const searchField = {
        'textAlign': 'center'
    }
    // Employee Data
    async function getEmployeeData() {
        await axios.get(
            `${baseUrl}/employees-by-designation/Support`,
            {
                'headers': {
                    'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`
                }
            }
        ).then((response) => {
            setEmployeeData(response.data);
            //console.log(response.data);
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
    // console.log(employeeData);
    useEffect(() => {
        getEmployeeData();
    }, []);

    useEffect(() => {
        if (employeeData !== null) {
            const result = employeeData.filter(employee => {
                return (employee.employeeId.toLowerCase().match(employeeParam.toLowerCase()) || employee.employeeName.toLowerCase().match(employeeParam.toLowerCase()));
            });
            setFilterData(result);
        }
    }, [employeeParam, employeeData]);

    if (employeeData === null) {
        return <div></div>;
    }
    return (
        <div className={classes.bo}>
            <h2 class="text-center" style={styleHeading}><b>Support</b></h2>
            <div style={searchField}>
                <input type='text' placeholder='Search by ID or Name' value={employeeParam} onChange={(e) => setEmployeeParam(e.target.value)} />
            </div>
            <div className="container mt-3">
                <div className={classes.profile}>
                    <div className="row">
                        {filtedData.map(employee => {
                            return (
                                <div className="col-md-3">
                                    <div className="card shadow-lg d-flex" >
                                        <div className={classes.card}>
                                            <EmployeeImage employeeId={employee['employeeId']} designation='Support' />
                                            {/* <img src={require('../../../Images/ProfileImage.png')} className={classes.img} alt="support" /> */}
                                            <div className="card-body">
                                                <div className={classes.cardh}>
                                                    <div className={classes.text}>
                                                        <h3>{employee['employeeName']}</h3>
                                                        <h4 class="text-center">{employee['designation']}</h4>
                                                        <h4 class="text-center"><b>Project ID: </b>{employee['currentProject']}</h4>
                                                        <h4 class="text-center"><b>Email: </b>{employee['emailId']}</h4>
                                                        <h4 class="text-center"><b>Mobile: </b>{employee['mobileNumber']}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DevOps;