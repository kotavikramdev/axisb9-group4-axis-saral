import React, { useEffect, useState } from 'react';
import Header from '../GeneralComponents/component/Header';
import Footer from '../GeneralComponents/component/Footer';
import UpdateProfileForm from './component/UpdateProfileForm';
import axios from 'axios';

function UpdateProfile(props) {
    const [employeeData, setEmployeeData] = useState(null);
    const [profileImage, setProfileImage] = useState(null);
    const employeeId = sessionStorage.getItem('employeeId');
    const token = sessionStorage.getItem('jwtToken');
    useEffect(() => {
        axios.get(
            `http://localhost:8710/employee/${employeeId}`,
            {
                'headers': {
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then((response) => {
            // console.log(response.data);
            setEmployeeData(response.data);
        }).catch((error) => {
            console.log(error);
        })
        axios.get(
            `http://localhost:8708/profile-image/${employeeId}`
        ).then((response) => {
            // console.log(response.data);
            setProfileImage(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);
    if (employeeData === null) {
        return <div></div>;
    }
    return (
        <div>
            <Header />
            <UpdateProfileForm mobileNumber={employeeData['mobileNumber']} profileImage={profileImage['data']}/>
            <Footer />
        </div>
    );
}

export default UpdateProfile;