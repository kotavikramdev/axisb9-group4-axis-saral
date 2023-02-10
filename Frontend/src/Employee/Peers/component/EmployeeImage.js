import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EmployeeImage(props) {
    const employeeStyle = {
        'position': 'relative',
        'display': 'block',
        'marginLeft': 'auto',
        'marginRight': 'auto',
        'zIndex': '1',
        'width': '140px',
        'height': '140px',
        'borderRadius': '50%',
        'border': '7px solid #fff',
        'marginTop': '-80px'
    }
    const [employeeImage, setEmployeeImage] = useState(null);
    function getEmployeeImage() {
        axios.get(
            `http://localhost:8708/profile-image/${props.employeeId}`
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
            <img src={`data:image/jpeg;base64,${employeeImage['data']}`} style={employeeStyle} alt={props.designation} />
        </div>
    );
}

export default EmployeeImage;