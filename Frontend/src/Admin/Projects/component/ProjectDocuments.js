import React, { useEffect, useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import classes from '../style/ProjectDocuments.module.css';
import axios from 'axios';

function ProjectDocuments(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [projectDocs, setProjectDocs] = useState(null);
    const baseUrl = `http://localhost:8707/project-document/${props.projectId}`;

    const [showPDFModal, setShowPDFModal] = useState(false);
    const closePDFModal = () => setShowPDFModal(false);
    const openPDFModal = () => setShowPDFModal(true);

    const [addProjModal, setAddProjModal] = useState(false);
    const closeAddProjModal = () => setAddProjModal(false);
    const openAddProjModal = () => setAddProjModal(true);

    const [viewDocument, setViewDocument] = useState(null);
    const [viewDocumentName, setViewDocumentName] = useState(null);
    // View Project
    function viewProjectDoc(document, documentName) {
        setViewDocument(document);
        setViewDocumentName(documentName);
        openPDFModal();
    }
    // Delete Project 
    function deleteProjectDoc(documentId) {
        axios.delete(
            `http://localhost:8707/delete-project-document/${documentId}`
        ).then((response) => {
            alert(response.data);
            window.location.reload();
        }).catch((error) => {
            alert(error.response.data);
        })
    }
    // Add Project Document
    const [addProjDocId, setAddProjDocId] = useState('');
    const [addProjDocName, setAddProjDocName] = useState('');
    var singleFileUploadInput = document.querySelector('#addProjDoc');
    function addProject(event) {
        event.preventDefault();
        var files = singleFileUploadInput.files;
        var formData = new FormData();
        formData.append("projectDocumentId", addProjDocId);
        formData.append("documentName", addProjDocName);
        formData.append("document", files[0]);
        formData.append("projectId", props.projectId);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8707/project-document/add");
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
        axios.get(
            baseUrl
        ).then((response) => {
            setProjectDocs(response.data);
            console.log(response.data);
            setIsLoading(false);
        })
    }, []);
    if (isLoading) {
        return (
            <div> </div>
        )
    }
    return (
        <div>
            <div className={classes.docs}>
                <h3>Project Documents</h3>
                {projectDocs.map(docs => {
                    return (
                        <div className={classes.admindoc}>
                            <img src={require('../../../Images/DocIcon.png')} alt='PDF' />
                            <div className={classes.docmail}>
                                <div className={classes.docname}>
                                    {docs['documentName']}
                                </div>
                                <div className={classes.mail}>
                                    <Button variant='success' size='lg' onClick={() => viewProjectDoc(docs['document'], docs['documentName'])}><span>View Doc</span></Button>
                                </div>
                                <div className={classes.mail}>
                                    <Button variant='danger' size='lg' onClick={() => deleteProjectDoc(docs['projectDocumentId'])}><span>Delete Doc</span></Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className={classes.addscd}>
                    <Button variant='warning' size='lg' onClick={openAddProjModal}><span>Add Doc</span></Button>
                </div>
                <div>
                    <Modal
                        show={showPDFModal}
                        size='lg'
                        fullscreen={'below lg'}
                    >
                        <Modal.Header closeButton onClick={closePDFModal}>
                            <Modal.Title>{viewDocumentName}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <iframe
                                src={`data:application/pdf;base64,${viewDocument}`}
                                title={viewDocumentName}
                                width='765rem'
                                height='500rem'
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='secondary' onClick={closePDFModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div>
                    <Modal
                        show={addProjModal}
                        size='lg'
                        fullscreen={'below lg'}
                    >
                        <Modal.Header closeButton onClick={closeAddProjModal}>
                            <Modal.Title>Add Project Document</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Document ID</Form.Label>
                                    <Form.Control
                                        id="addProjDocId"
                                        name="addProjDocId"
                                        type="text"
                                        placeholder="Enter an ID for Document"
                                        onChange={(e) => setAddProjDocId(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Document Name</Form.Label>
                                    <Form.Control
                                        id="addProjDocName"
                                        name="addProjDocName"
                                        type="text"
                                        placeholder="Enter the name of Document"
                                        onChange={(e) => setAddProjDocName(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Upload the Document</Form.Label>
                                    <Form.Control
                                        id='addProjDoc'
                                        name='addProjDoc'
                                        type="file"
                                        accept='.pdf'
                                        required
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='success' type='submit' onClick={addProject}>Add</Button>
                            <Button variant='secondary' onClick={closeAddProjModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default ProjectDocuments;