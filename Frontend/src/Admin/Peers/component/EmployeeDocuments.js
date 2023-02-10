import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import classes from '../style/EmployeeDocuments.module.css';

function EmployeeDocuments(props) {
    //Get Employee Documents
    const [employeeOtherDocs, setEmployeeOtherDocs] = useState(null);
    const [employeeSalaryDocs, setEmployeeSalaryDocs] = useState(null);
    function getEmployeeDoc() {
        axios.get(
            `http://localhost:8712/employee-other-documents/${props.employeeId}`
        ).then((response) => {
            setEmployeeOtherDocs(response.data);
        }).catch((error) => {
            console.log(error);
        })
        axios.get(
            `http://localhost:8712/employee-salary-slip/${props.employeeId}`
        ).then((response) => {
            setEmployeeSalaryDocs(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }
    // Delete Employee Doc
    function deleteEmployeeDoc(employeeDocumentId) {
        // console.log(employeeDocumentId);
        axios.delete(
            `http://localhost:8712/delete-employee-document/${employeeDocumentId}`
        ).then((response) => {
            alert(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }
    // Add Other Employee Doc
    const [addOtherDocModal, setAddOtherDocModal] = useState(false);
    const closeAddOtherDocModal = () => setAddOtherDocModal(false);
    const openAddOtherDocModal = () => setAddOtherDocModal(true);
    const [addOtherDocId, setAddOtherDocId] = useState('');
    const [addOtherDocName, setAddOtherDocName] = useState('');
    var otherDocumentInput = document.querySelector('#otherdocument');
    function addOtherDoc(event) {
        event.preventDefault();
        var files = otherDocumentInput.files;
        var formData = new FormData();
        formData.append("employeeDocumentId", addOtherDocId);
        formData.append("documentName", addOtherDocName);
        formData.append("document", files[0]);
        formData.append("employeeId", props.employeeId);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8712/employee-document/add");
        xhr.onload = function () {
            console.log(xhr.responseText);
            if (xhr.status === 200) {
                alert("Document Added Successfully");
            } else {
                alert("Error occured while Adding Document");
            }
        }
        xhr.send(formData);
    }
    // Add Salary Employee Doc
    const [addSalaryDocModal, setAddSalaryDocModal] = useState(false);
    const closeAddSalaryDocModal = () => setAddSalaryDocModal(false);
    const openAddSalaryDocModal = () => setAddSalaryDocModal(true);
    const [addSalaryDocId, setAddSalaryDocId] = useState('');
    const monthArray = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const [addSalaryMonthYear, setaddSalaryMonthYear] = useState('');
    var salaryDocumentInput = document.querySelector('#salarydocument');
    function addSalaryDoc(event) {
        event.preventDefault();
        var files = salaryDocumentInput.files;
        var extractMonth = monthArray[addSalaryMonthYear.split('-')[1] - 1];
        var extractYear = addSalaryMonthYear.split('-')[0];
        var formData = new FormData();
        formData.append("employeeDocumentId", addSalaryDocId);
        formData.append("documentName", `SalarySlip-${extractMonth}-${extractYear}`);
        formData.append("document", files[0]);
        formData.append("employeeId", props.employeeId);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8712/employee-document/add");
        xhr.onload = function () {
            console.log(xhr.responseText);
            if (xhr.status === 200) {
                alert("Document Added Successfully");
            } else {
                alert("Error occured while Adding Document");
            }
        }
        xhr.send(formData);
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
                <h3>Employee Docs</h3>
                <div className={classes.addOtherDoc}>
                    <Button variant='warning' size='lg' onClick={openAddOtherDocModal}><span>Add Document</span></Button>
                </div>
                {employeeOtherDocs.map(doc => {                    
                    return (
                        <div className={classes.doc}>
                            <img src={require('../../../Images/DocIcon.png')} alt='PDF' />
                            <div className={classes.docmail}>
                                <div className={classes.docname}>
                                    {doc['documentName']}
                                </div>
                                <div className={classes.mail}>
                                    <Button variant='danger' size='lg' onClick={() => deleteEmployeeDoc(doc['employeeDocumentId'])}><span>Delete Doc</span></Button>
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
                                                    <Button variant='danger' size='lg' onClick={() => deleteEmployeeDoc(doc['employeeDocumentId'])}><span>Delete Doc</span></Button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                <div className={classes.addSalaryDoc}>
                                    <Button variant='warning' size='lg' onClick={openAddSalaryDocModal}><span>Add SalarySlip</span></Button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <div>
                <Modal
                    show={addOtherDocModal}
                    size='lg'
                    fullscreen={'below lg'}
                >
                    <Modal.Header closeButton onClick={closeAddOtherDocModal}>
                        <Modal.Title>Add Document</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Document ID</Form.Label>
                                <Form.Control
                                    id="addOtherDocId"
                                    name="addOtherDocId"
                                    type="text"
                                    placeholder="Enter an ID for Document"
                                    onChange={(e) => setAddOtherDocId(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Document Name</Form.Label>
                                <Form.Control
                                    id="addOtherDocName"
                                    name="addOtherDocName"
                                    type="text"
                                    placeholder="Enter the name of Document"
                                    onChange={(e) => setAddOtherDocName(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Upload the Document</Form.Label>
                                <Form.Control
                                    id='otherdocument'
                                    name='otherdocument'
                                    type="file"
                                    accept='.pdf'
                                    required
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='success' type='submit' onClick={addOtherDoc}>Add</Button>
                        <Button variant='secondary' onClick={closeAddOtherDocModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div>
                <Modal
                    show={addSalaryDocModal}
                    size='lg'
                    fullscreen={'below lg'}
                >
                    <Modal.Header closeButton onClick={closeAddSalaryDocModal}>
                        <Modal.Title>Add SalarySlip</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Document ID</Form.Label>
                                <Form.Control
                                    id="addSalaryDocId"
                                    name="addSalaryDocId"
                                    type="text"
                                    placeholder="Enter an ID for Document"
                                    onChange={(e) => setAddSalaryDocId(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Select Month</Form.Label>
                                <Form.Control
                                    id="addSalaryMonthYear"
                                    name="addSalaryMonthYear"
                                    type="month"
                                    placeholder="Enter the name of Document"
                                    onChange={(e) => setaddSalaryMonthYear(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Upload SalarySlip</Form.Label>
                                <Form.Control
                                    id='salarydocument'
                                    name='salarydocument'
                                    type="file"
                                    accept='.pdf'
                                    required
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='success' type='submit' onClick={addSalaryDoc}>Add</Button>
                        <Button variant='secondary' onClick={closeAddSalaryDocModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default EmployeeDocuments;