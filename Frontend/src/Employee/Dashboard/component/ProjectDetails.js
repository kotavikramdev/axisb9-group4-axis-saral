import React from 'react';
import classes from '../style/ProjectDetails.module.css';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

function ProjectDetails(props) {
    const projectDescriptionStyle = {
        'color': 'dimgrey',
        'fontWeight': 'bolder'
    }
    return (
        <div>
            <div className={classes.currentproject}>
                <Card className={classes.card}>
                    <Card.Header><span className={classes.cardheader}>Your Project</span></Card.Header>
                    <Card.Body>
                        <Card.Title><span className={classes.cardtitle}>{props.data['projectName']}</span></Card.Title>
                        <Card.Text>
                            <span className={classes.cardtext}>
                                <b style={projectDescriptionStyle}>Project Description:</b> 
                                <br/>
                                {props.data['projectDescription']}
                            </span>
                        </Card.Text>
                        <Link to='/projects'><Button variant='outline-secondary'><b>Explore More Projects</b></Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default ProjectDetails;