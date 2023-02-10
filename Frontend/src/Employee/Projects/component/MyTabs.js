import React, { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProjectCard from './ProjectCard';
import classes from '../style/MyTabs.module.css';
import ProjectDetails from './ProjectDetails';
import axios from 'axios';
const MyTabs = (props) => {
  const [filterData, setFilterData] = useState([]);
  const [projParam, setProjParam] = useState("");

  const [otherProjects, setOtherProjects] = useState([]);
    const baseUrl = 'http://localhost:8710';
    const token = 'Bearer '+sessionStorage.getItem('jwtToken');
    async function getOtherProjectDetails() {
      await axios
        .get(`${baseUrl}/other-projects/`+props.projectId,
          {
            'headers': {
              'Authorization': `${token}`
            }
          })
        .then((response) => {
          setOtherProjects(response.data);
          // console.log(otherProjects);
        }).catch((error) => {
          console.log(error.response.data);
        });
    }

    useEffect(() => {
      getOtherProjectDetails();
    }, []);
  
    useEffect(()=>{
        const result = otherProjects.filter(proj=>{
          return (proj.projectId.toLowerCase().match(projParam.toLowerCase()) || proj.projectName.toLowerCase().match(projParam.toLowerCase()));
      });  
      setFilterData(result);
     },[projParam,otherProjects]);

  return (
    <div>
      <Tabs
        defaultActiveKey="current-project"
        id="justify-tab-example"
        className="mb-3"
        style={{ backgroundColor: '#f6f6f6' }}
        justify
      >
        <Tab eventKey="current-project" title="My Project">
          <ProjectDetails 
          projectId={props.projectId}/>
        </Tab>
        <Tab eventKey="other-project" title="Other Projects" style={{ backgroundColor: '#f6f6f6' }}>
          <div className={classes.search}>
            <input type='text'
              placeholder='Enter Project Id or Project Name '
              value={projParam}
              onChange={(e) => setProjParam(e.target.value)}>
            </input>

          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {
              filterData.map((project)=>
              <ProjectCard
                projectData={project} 
                />
              )}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default MyTabs;