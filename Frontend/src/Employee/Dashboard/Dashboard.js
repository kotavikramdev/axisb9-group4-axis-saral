import React, { useEffect, useState } from 'react';
import Header from '../GeneralComponents/component/Header';
import Footer from '../GeneralComponents/component/Footer';
import Feeds from './component/Feeds';
import ProjectDetails from './component/ProjectDetails';
import TeamDetails from './component/TeamDetails';
import axios from 'axios';

function Dashboard(props) {
    const dashboard = {
        'display': 'flex',
        'justifyContent': 'space-between',
        'marginTop': '1rem'
    }
    const token = sessionStorage.getItem('jwtToken');
    const [projectData, setProjectData] = useState(null);
    const baseUrl = 'http://localhost:8710';

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
        getCurrentProjectData();
    }, []);

    if (projectData === null) {
        return (<div></div>);
    }
    return (
        <div>
            <Header />
            <div style={dashboard}>
                <ProjectDetails data={projectData}/>
                <Feeds />
                <TeamDetails />
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;