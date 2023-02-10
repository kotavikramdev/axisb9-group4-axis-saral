import React from 'react';
import Header from '../GeneralComponents/component/Header';
import Footer from '../GeneralComponents/component/Footer';
import MyTabs from './component/MyTabs';

const Projects = () => {

    const projectId = sessionStorage.getItem('currentProjectId');

    return (
        <div>
            <Header />
            <MyTabs 
                projectId={projectId}/>
            <Footer />
        </div>
    );
};

export default Projects;