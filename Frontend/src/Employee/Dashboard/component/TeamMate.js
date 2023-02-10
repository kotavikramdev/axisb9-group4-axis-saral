import React, { useEffect, useState } from 'react';
import classes from '../style/TeamMate.module.css';
import axios from 'axios';

function TeamMate(props) {
    const [teamMateImage, setTeamMateImage] = useState(null);
    function getTeamMateImage() {
        axios.get(
            `http://localhost:8708/profile-image/${props.employeeId}`
        ).then((response) => {
            // console.log(response.data);
            setTeamMateImage(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        getTeamMateImage();
    },[])
    if (teamMateImage === null) {
        return <div></div>
    } 
    return (
        <div>
            <div className={classes.person}>
                <img src={`data:image/jpeg;base64,${teamMateImage['data']}`} alt='Profile' />
                <div>
                    <h5>{props.employeeName}</h5>
                    <h6>{props.designation}</h6>
                </div>
            </div>
        </div>
    );
}

export default TeamMate;