import React, { useEffect, useState } from 'react';
import classes from '../style/EmployeeDetails.module.css';
import axios from 'axios';

function EmployeeDetails(props) {
    const [employeeImage, setEmployeeImage] = useState(null);
    function getEmployeeImage() {
        axios.get(
            `http://localhost:8708/profile-image/${props.data['employeeId']}`
        ).then((response) => {
            // console.log(response.data);
            setEmployeeImage(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        getEmployeeImage();
    },[])
    if (employeeImage === null) {
        return <div></div>
    } 
    return (
        <div>
            <div className={classes.details}>
                <div className={classes.image}>
                    <img src={`data:image/jpeg;base64,${employeeImage['data']}`} alt='Profile' />
                </div>
                <div className={classes.employeeinfo}>
                    <div className={classes.name}>
                        <h1>{props.data['employeeName']}</h1> 
                        <h2>{props.data['designation']}</h2>
                    </div>
                    <h4><b>Employee ID:</b> {props.data['employeeId']}</h4>
                    <h4><b>Email:</b> {props.data['emailId']}</h4>
                    <h4><b>Mobile:</b> {props.data['mobileNumber']}</h4>
                </div>
            </div>
        </div>
    );
}

export default EmployeeDetails;