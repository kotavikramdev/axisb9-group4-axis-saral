import React, { useEffect, useState } from 'react';
import classes from '../style/TeamDetails.module.css';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { Link } from 'react-router-dom';
import TeamMate from './TeamMate';

function TeamDetails(props) {
    const [team, setTeam] = useState(null);
    const token = sessionStorage.getItem('jwtToken');
    const baseUrl = `http://localhost:8710`;

    // Employees By Project
    async function getEmployeesByProject() {
        const projectId = sessionStorage.getItem('currentProjectId');
        await axios.get(
            `${baseUrl}/employees-by-project/${projectId}`,
            {
                'headers': {
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then((response) => {
            // console.log(response.data);
            setTeam(response.data);
        }).catch((error) => {
            console.log(error.response.data);
        })
    }

    useEffect(() => {
        getEmployeesByProject();
    }, []);

    if (team === null) {
        return (<div></div>);
    }
    return (
        <div>
            <div className={classes.team}>
                <Card className={classes.card}>
                    <Card.Header><span className={classes.cardheader}>Your Team</span></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {team.map(teamMate => {
                                if(teamMate['employeeName'] === sessionStorage.getItem('employeeName')) {
                                    return null;
                                }
                                return (
                                    <TeamMate employeeId={teamMate['employeeId']} employeeName={teamMate['employeeName']} designation={teamMate['designation']}/>
                                    // <div className={classes.person}>
                                    //     <img src={require('../../../Images/ProfileImage.png')} alt='Profile' />
                                    //     <div>
                                    //         <h5>{teamMate['employeeName']}</h5>
                                    //         <h6>{teamMate['designation']}</h6>
                                    //     </div>
                                    // </div>
                                );
                            })}
                        </Card.Text>
                        <Link to='/peers'><Button variant='outline-secondary'><b>Explore More Peers</b></Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default TeamDetails;