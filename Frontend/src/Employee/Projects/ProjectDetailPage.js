import React from 'react';
import ProjectDetails from './component/ProjectDetails'
import Header from '../GeneralComponents/component/Header'
import Footer from '../GeneralComponents/component/Footer'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const ProjectDetailPage = () => {

    const location = useLocation();
    const projectId=useState(location.state.passProjectId);
    console.log(projectId[0]);
    return (
        <div style={{backgroundColor:'#f6f6f6'}}>
            <Header />
            <ProjectDetails 
            projectId={projectId[0]}/>
            <Footer />
        </div>
    );
};

export default ProjectDetailPage;