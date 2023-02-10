import React from 'react';
import AllProjects from './component/AllProjects'
import AdminHeader from '../GeneralComponents/component/AdminHeader';
import AdminFooter from '../GeneralComponents/component/AdminFooter';
function ProjectAdmin(props) {
    return (
        <div style={{backgroundColor:'#f6f6f6'}}>
            <AdminHeader />
            <AllProjects />
            <AdminFooter />
        </div>
    );
}

export default ProjectAdmin;