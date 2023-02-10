import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import classes from '../style/ProjectCard.module.css'

const ProjectCard = (props) => {

    const navigate = useNavigate();
    const [passProjectId,setPassProjectId] = useState(props.projectData['projectId']);

    function sendProjectId(){
        // const projectId=props.projectData['projectId'];
        // console.log(props.projectData['projectId']);
        // setPassProjectId(props.projectData['projectId']);
        // console.log(passProjectId);
        navigate("/project-details",{state:{
            passProjectId:passProjectId,
          },});
    }

    return (
        <div className={classes.projectCard}>
            <Card className={classes.card}>
                <Card.Header className={classes.header}>{props.projectData['projectId']}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.projectData['projectName']}</Card.Title>
                    <span className={classes.styling}>
                    <Card.Text>
                       {props.projectData['projectDescription']}
                    </Card.Text>
                    {/* <Link to={"/project-details"}>  */}
                        <button className={classes.details} onClick={()=>sendProjectId()}

                        >Explore</button>
                    {/* </Link> */}
                    </span>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProjectCard;