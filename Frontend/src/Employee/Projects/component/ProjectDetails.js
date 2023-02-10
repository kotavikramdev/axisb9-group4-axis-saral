import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import classes from '../style/ProjectDetails.module.css'
import Details from './Details';
import Flowchart from './Flowchart';
import Opportunity from './Opportunity';
import ProblemStatement from './ProblemStatement';
import ProjectDocuments from './ProjectDocuments';
import ProjectTeam from './ProjectTeam';

const ProjectDetails = (props) => {
    const [stakeholderData, setStakeholderData] = useState([]);
    const [project,setProject] = useState({});
    const [flowchart,setFlowchart] = useState({});
    const [team, setTeam] = useState([]);
    const [teamSize,setTeamSize] = useState(0);
    const baseUrl = 'http://localhost:8710';
    const token = 'Bearer '+sessionStorage.getItem('jwtToken');
    async function getProjectDetails(){
        await axios
        .get(`${baseUrl}/project/${props.projectId}`,
        {
            'headers': {
                'Authorization': `${token}`
            }
        })
        .then((response) => {
          setProject(response.data);
          
        }).catch((error) => {
            
            console.log(error.response.data);
        });

        await axios
            .get(`${baseUrl}/employees-by-project/${props.projectId}`,
                {
                    'headers': {
                        'Authorization': `${token}`
                    }
                })
            .then((response) => {
                setTeam(response.data);
                setTeamSize(response.data.length)
                

            }).catch((error) => {

                console.log(error.response.data);
            });

            await axios
            .get(`${baseUrl}/stakeholder-project/${props.projectId}`,
                {
                    'headers': {
                        'Authorization': `${token}`
                    }
                })
            .then((response) => {
                console.log(response.data);
                setStakeholderData(response.data);


            }).catch((error) => {

                console.log(error.response.data);
            });

            axios.get(
                `http://localhost:8707/project-flowchart/${props.projectId}`,
                {
                    'headers': {
                        'Authorization': `Bearer ${token}`
                    }
                }
            ).then((response) => {
                setFlowchart(response.data);
            }).catch((error) => {
                console.log(error);
            })
            
    }

    useEffect(() => {
        getProjectDetails();
        // console.log("my project details");
      },[]);




    return (
        <div className={classes.projectDetails}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <div className={classes.navigationBar}>
                            <Nav variant="tabs">
                                <div className={classes.item}>
                                    <Nav.Item>
                                        <span className={classes.navTabs}>
                                            <Nav.Link eventKey="first" className={classes.navLink}>
                                                <span className={classes.statement}>Problem Statement</span>
                                            </Nav.Link>
                                        </span>
                                    </Nav.Item>
                                </div>


                                <span className={classes.item}>

                                    <Nav.Item >
                                        <span className={classes.navTabs}>
                                            <Nav.Link eventKey="second" className={classes.navLink}>
                                                Project Team
                                            </Nav.Link>
                                        </span>
                                    </Nav.Item>
                                </span>


                                <span className={classes.item}>
                                    <Nav.Item>
                                        <span className={classes.navTabs}>
                                            <Nav.Link eventKey="third" className={classes.navLink}>
                                                Flowchart
                                            </Nav.Link>
                                        </span>
                                    </Nav.Item>
                                </span>


                                <span className={classes.item}>
                                    <Nav.Item>
                                        <span className={classes.navTabs}>
                                            <Nav.Link eventKey="fourth" className={classes.navLink}>
                                                Details
                                            </Nav.Link>
                                        </span>
                                    </Nav.Item>
                                </span>


                                <span className={classes.item}>
                                    <Nav.Item>
                                        <span className={classes.navTabs}>
                                            <Nav.Link eventKey="fifth" className={classes.navLink}>
                                                Opportunities within Project
                                            </Nav.Link>
                                        </span>
                                    </Nav.Item>
                                </span>


                                <span className={classes.item}>
                                    <Nav.Item>
                                        <span className={classes.navTabs}>
                                            <Nav.Link eventKey="sixth" className={classes.navLink}>
                                                Project Documents
                                            </Nav.Link>
                                        </span>
                                    </Nav.Item>
                                </span>


                            </Nav>
                        </div>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className={classes.content}>

                            <Tab.Pane eventKey="first" >
                                <ProblemStatement 
                                projectName={project.projectName}
                                projectDescription={project.projectDescription}
                                />
                            </Tab.Pane>


                            <Tab.Pane eventKey="second">
                                <ProjectTeam 
                                team={team}/>
                            </Tab.Pane>


                            <Tab.Pane eventKey="third">
                                <Flowchart
                                flowchart={flowchart}
                                />
                            </Tab.Pane>


                            <Tab.Pane eventKey="fourth">
                                <Details 
                                projectId={project.projectId}
                                deadline={project.deadline}
                                owner={project.projectOwner}
                                projectTitle={project.projectTitle}
                                stakeholderData={stakeholderData}/>
                            </Tab.Pane>


                            <Tab.Pane eventKey="fifth">
                                <p><Opportunity
                                teamSize={teamSize} /></p>
                            </Tab.Pane>


                            <Tab.Pane eventKey="sixth">
                                <p><ProjectDocuments
                                projectId={props.projectId}/></p>
                            </Tab.Pane>


                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
};

export default ProjectDetails;