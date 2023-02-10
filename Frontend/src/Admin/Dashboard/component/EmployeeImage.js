import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EmployeeImage(props) {
    const employeeStyle = {
        'alignSelf': 'center',
        'width': '3rem',
        'height': '3rem',
        'borderRadius': '100rem',
        'border': '4px solid #AE275F',
        'margin': '0 1rem 0 1rem'
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