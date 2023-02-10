import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import classes from '../style/ProjectCard.module.css'

const ProjectCard = (props) => {

    const navigate = useNavigate();
    const [passProjectId, setPassProjectId] = useState(props.projectData['projectId']);
    const baseUrl = 'http://localhost:8711';
    const token = 'Bearer ' + sessionStorage.getItem('jwtToken');
    function sendProjectId() {
        navigate("/admin-project-details", {
            state: {
                passProjectId: passProjectId,
            },
        });
    }

    function deleteProject(projectId) {
        axios.delete(
            `${baseUrl}/delete-project/` + projectId
            , {
                'headers': {
                    'Authorization': `${token}`
                }
            }
        ).then((response) => {
            alert(response.data);
            window.location.reload();
        }).catch((error) => {
            alert(error.response.data);
        })
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
                        <div className={classes.btngroup}>                        
                            <button className={classes.details} onClick={() => sendProjectId()}>Explore</button>
                            <button className='btn btn-warning' onClick={() => deleteProject(props.projectData['projectId'])}> Delete </button>
                        </div>

                    </span>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProjectCard;