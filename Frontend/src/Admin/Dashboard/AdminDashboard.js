import React, { useEffect, useState } from 'react';
import AdminFooter from '../GeneralComponents/component/AdminFooter';
import AdminHeader from '../GeneralComponents/component/AdminHeader';
import axios from 'axios';
import AllProjectsData from './component/AllProjectsData';
import AllFeedsData from './component/AllFeedsData';
import AllEmployeesData from './component/AllEmployeesData';

function AdminDashboard(props) {
    const dashboard = {
        'display': 'flex',
        'justifyContent': 'space-between',
        'marginTop': '1rem'
    }
    const token = sessionStorage.getItem('jwtToken');
    const [allProjectsData, setAllProjectsData] = useState(null);
    const baseUrl = 'http://localhost:8711';

    // All Projects Data
    async function getAllProjectsData() {
        await axios.get(
            `${baseUrl}/projects`,
            {
                'headers': {
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then((response) => {
            console.log(response.data);
            setAllProjectsData(response.data);
        }).catch((error) => {
            console.log(error.response.data);
        })
    }

    useEffect(() => {
        getAllProjectsData();
    }, []);

    if (allProjectsData === null) {
        return (<div></div>);
    }
    return (
        <div>
            <AdminHeader/>
            <div style={dashboard}>
            <AllProjectsData data={allProjectsData}/>
            <AllFeedsData />
            <AllEmployeesData/>
            </div>
            <AdminFooter/>
        </div>
    );
}

export default AdminDashboard;