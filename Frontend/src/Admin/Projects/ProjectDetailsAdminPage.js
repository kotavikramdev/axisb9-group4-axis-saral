import React from 'react';
import ProjectDetails from './component/ProjectDetails'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import AdminHeader from '../GeneralComponents/component/AdminHeader';
import AdminFooter from '../GeneralComponents/component/AdminFooter';

const ProjectDetailsAdminPage = () => {

    const location = useLocation();
    const projectId=useState(location.state.passProjectId);
    // console.log(projectId[0]);
    return (
        <div style={{backgroundColor:'#f6f6f6'}}>
            <AdminHeader />
            <ProjectDetails 
            projectId={projectId[0]}/>
            <AdminFooter />
        </div>
    );
};

export default ProjectDetailsAdminPage;