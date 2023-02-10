import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import classes from '../style/Peers.module.css';
import axios from 'axios';
import EmployeeImage from './EmployeeImage';

function Director(props) {
    const [employeeData, setEmployeeData] = useState(null);
    const baseUrl = 'http://localhost:8710';

    // Employee Data
    async function getEmployeeData() {
        await axios.get(
            `${baseUrl}/employees-by-designation/Director`,
            {
                'headers': {
                    'Authorization': `Bearer ${sessionStorage.getItem('jwtToken')}`
                }
            }
        ).then((response) => {
            setEmployeeData(response.data);
        }).catch((error) => {
            console.log("error");
        })
    }
    // console.log(employeeData);
    useEffect(() => {
        getEmployeeData();
    }, []);
    if (employeeData === null) {
        return <div></div>;
    }
    return (
        <div>
            <div className={classes.bo}>
                <div className={classes.profile}>
                    <div className="container mt-3">
                        <Row xs={1} md={2} className="g-4">
                            {employeeData.map(employee => {
                                return (
                                    <div className="col-md-3">
                                        <div className="card shadow-lg d-flex">
                                            <div className={classes.card}>
                                                {/* <img src={employee['imageUrl']} className={classes.img} alt="president" /> */}
                                                <EmployeeImage employeeId={employee['employeeId']} designation='Director'/>                                        
                                                <div className="card-body">
                                                    <div className={classes.cardh}>
                                                        <div className={classes.text}>
                                                            <h3>{employee['employeeName']}</h3>
                                                            {/* <h3>Employee Name</h3> */}
                                                            <h4 class="text-center">{employee['designation']}</h4>
                                                            <h4 class="text-center"><b>Email: </b>{employee['emailId']}</h4>
                                                            <h4 class="text-center"><b>Mobile: </b>{employee['mobileNumber']}</h4>
                                                            {/* <h4 class="text-center">Designation</h4> */}
                                                            {/* <div class="text-center">
                                                            <button className={classes.btn}>Read more</button>
                                                        </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Director;