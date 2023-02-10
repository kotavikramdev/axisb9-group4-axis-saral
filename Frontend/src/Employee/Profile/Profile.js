import React, { useEffect, useState } from 'react';
import CurrentProject from './component/CurrentProject';
import EmployeeDetails from './component/EmployeeDetails';
import Footer from '../GeneralComponents/component/Footer';
import Header from '../GeneralComponents/component/Header';
import MyDocs from './component/MyDocs';
import axios from 'axios';

function Profile(props) {
    const token = sessionStorage.getItem('jwtToken');
    const [employeeData, setEmployeeData] = useState(null);
    const [projectData, setProjectData] = useState(null);
    const baseUrl = 'http://localhost:8710';

    // Employee Data
    async function getEmployeeData() {
        const employeeId = sessionStorage.getItem('employeeId');
        await axios.get(
            `${baseUrl}/employee/${employeeId}`,
            {
                'headers': {
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then((response) => {
            setEmployeeData(response.data);
            // console.log(response.data);
        }).catch((error) => {
            console.log(error.response.data);
        })
    }

    // Current Project Data
    async function getCurrentProjectData() {
        const currentProjectId = sessionStorage.getItem('currentProjectId');
        await axios.get(
            `${baseUrl}/project/${currentProjectId}`,
            {
                'headers': {
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then((response) => {
            // console.log(response.data);
            setProjectData(response.data);
        }).catch((error) => {
            console.log(error.response.data);
        })
    }

    useEffect(() => {
        getEmployeeData();
        getCurrentProjectData();
    }, []);

    if (employeeData === null || projectData === null) {
        return (<div></div>);
    }
    return (
        <div>
            <Header />
            <EmployeeDetails data={employeeData} />
            <CurrentProject data={projectData} />
            <MyDocs email={employeeData['emailId']}/>
            <Footer />
        </div>
    );
}

export default Profile;