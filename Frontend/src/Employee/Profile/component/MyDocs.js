import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from "react-bootstrap/Button";
import Accordion from 'react-bootstrap/Accordion';
import classes from '../style/MyDocs.module.css';

function MyDocs(props) {
    // Send Doc
    function sendDoc(documentName) {
        axios.get(`http://localhost:8712/employee-document-mail/${sessionStorage.getItem('employeeId')}`,
            {
                params: {
                    emailMe: props.email,
                    documentName: documentName
                }
            }).then(response => alert(response.data)).catch(error => alert(error));
    }
    //Get Employee Documents
    const [employeeOtherDocs, setEmployeeOtherDocs] = useState(null);
    const [employeeSalaryDocs, setEmployeeSalaryDocs] = useState(null);
    function getEmployeeDoc() {
        axios.get(
            `http://localhost:8712/employee-other-documents/${sessionStorage.getItem('employeeId')}`
        ).then((response) => {
            setEmployeeOtherDocs(response.data);
        }).catch((error) => {
            console.log(error);
        })
        axios.get(
            `http://localhost:8712/employee-salary-slip/${sessionStorage.getItem('employeeId')}`
        ).then((response) => {
            setEmployeeSalaryDocs(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        getEmployeeDoc();
    }, []);
    if (employeeOtherDocs === null || employeeSalaryDocs === null) {
        return (
            <div></div>
        )
    }
    return (
        <div>
            <div className={classes.docs}>
                <h3>Your Docs</h3>
                {employeeOtherDocs.map(doc => {
                    return (
                        <div className={classes.doc}>
                            <img src={require('../../../Images/DocIcon.png')} alt='PDF' />
                            <div className={classes.docmail}>
                                <div className={classes.docname}>
                                    {doc['documentName']}
                                </div>
                                <div className={classes.mail}>
                                    <Button variant='success' size='lg' onClick={() => sendDoc(doc['documentName'])}><span>Email Me</span></Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className={classes.salaryslips}>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><b>Salary Slips</b></Accordion.Header>
                            <Accordion.Body>
                                {employeeSalaryDocs.map(doc => {
                                    return (
                                        <div className={classes.salarydoc}>
                                            <img src={require('../../../Images/DocIcon.png')} alt='PDF' />
                                            <div className={classes.salarydocmail}>
                                                <div className={classes.salarydocname}>
                                                    {doc['documentName']}
                                                </div>
                                                <div className={classes.salarymail}>
                                                    <Button variant='success' size='lg' onClick={() => sendDoc(doc['documentName'])}><span>Email Me</span></Button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default MyDocs;