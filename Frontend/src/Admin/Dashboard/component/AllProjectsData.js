import React from 'react';
import classes from '../style/AllProjectDetails.module.css';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

function AllProjectsData(props) {
    const projectDescriptionStyle = {
        'color': 'dimgrey',
        'fontWeight': 'bolder'
    }
    return (
        <div>
            <div className={classes.allprojects}>
                <Card className={classes.projectcard}>
                    <Card.Header><span className={classes.projectcardheader}>All Projects</span></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {props.data.map(project => {
                                return (
                                    <div className={classes.project}>
                                        {/* <img src={require('../../../Images/ProfileImage.png')} alt='Profile' /> */}
                                        <div>
                                            <div>
                                                <h5>{project['projectId']}</h5>
                                                <span><b>{project['projectStatus']}</b></span>
                                            </div>
                                            <h6>{project['projectName']}</h6>
                                        </div>
                                    </div>
                                );
                            })}
                            {/* <span className={classes.projectcardtext}>
                                <b style={projectDescriptionStyle}>Project Description:</b>
                                <br />
                                {props.data['projectDescription']}
                            </span> */}
                        </Card.Text>
                        <Link to='/admin-projects'><Button variant='outline-secondary'><b>Explore Projects</b></Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default AllProjectsData;