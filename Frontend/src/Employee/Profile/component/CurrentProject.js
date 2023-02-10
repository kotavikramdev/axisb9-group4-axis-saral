import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import classes from '../style/CurrentProject.module.css';

function CurrentProject(props) {
    return (
        <div>
            <div className={classes.currentproject}>
                <Card className={classes.card}>
                    <Card.Header><span className={classes.cardheader}>Current Project</span></Card.Header>
                    <Card.Body>
                        <Card.Title><span className={classes.cardtitle}>{props.data['projectName']}</span></Card.Title>
                        <Card.Text>
                            <span className={classes.cardtext}>
                                {props.data['projectDescription']}
                            </span>
                        </Card.Text>
                        <Link to='/projects'><Button variant='outline-secondary'><b>Explore</b></Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default CurrentProject;