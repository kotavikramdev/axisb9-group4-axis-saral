import React, { useEffect, useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import classes from '../style/AdminSCDDocs.module.css';
import axios from 'axios';

function AdminSCDDocs(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [scdDocs, setScdDocs] = useState(null);
    const baseUrl = `http://localhost:8706/general-documents-by-type/SCD`;

    const [showPDFModal, setShowPDFModal] = useState(false);
    const closePDFModal = () => setShowPDFModal(false);
    const openPDFModal = () => setShowPDFModal(true);

    const [addScdModal, setAddScdModal] = useState(false);
    const closeAddScdModal = () => setAddScdModal(false);
    const openAddScdModal = () => setAddScdModal(true);

    const [viewDocument, setViewDocument] = useState(null);
    const [viewDocumentName, setViewDocumentName] = useState(null);
    // View SCD
    function viewScd(document, documentName) {
        setViewDocument(document);
        setViewDocumentName(documentName);
        openPDFModal();
    }
    // Delete SCD 
    function deleteScd(documentId) {
        axios.delete(
            `http://localhost:8706/delete-general-document/${documentId}`
        ).then((response) => {
            alert(response.data);
        }).catch((error) => {
            alert(error.response.data);
        })
    }
    // Add SCD
    const [addScdDocId, setAddScdDocId] = useState('');
    const [addScdDocName, setAddScdDocName] = useState('');
    var singleFileUploadInput = document.querySelector('#addScdDoc');
    function addScd(event) {
        event.preventDefault();
        var files = singleFileUploadInput.files;
        var formData = new FormData();
        formData.append("generalDocumentId", addScdDocId);
        formData.append("documentName", addScdDocName);
        formData.append("document", files[0]);
        formData.append("documentType", "SCD");
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8706/general-document/add");
        xhr.onload = function () {
            console.log(xhr.responseText);
            if (xhr.status === 200) {
                alert("Document Added Successfully");
            } else {
                alert("Error occured while Adding Document");
            }
        }
        xhr.send(formData);
        sendNotification();
    }

    // Send Notification
    function sendNotification() {
        const emailDetails = {
            emailId: ["kotavikramdev@gmail.com"],
            messageSubject: "Updated SCDs by Adding new Document",
            messageBody: `Hello All! The new SCD Document (${addScdDocName}) has been added by Administrator. Kindly take a look at it. ThankYou!`
        }
        axios.post(`http://localhost:8712/send-notification`, emailDetails)
        .then((response) => {
            alert(response.data);
        })
        .catch((error) => {
            alert(error.response.data);
        })
    }
    
    useEffect(() => {
        axios.get(
            baseUrl
        ).then((response) => {
            setScdDocs(response.data);
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
                <h3>SCD Docs</h3>
                {scdDocs.map(scd => {
                    return (
                        <div className={classes.admindoc}>
                            <img src={require('../../../Images/DocIcon.png')} alt='PDF' />
                            <div className={classes.docmail}>
                                <div className={classes.docname}>
                                    {scd['documentName']}
                                </div>
                                <div className={classes.mail}>
                                    <Button variant='success' size='lg' onClick={() => viewScd(scd['document'], scd['documentName'])}><span>View SCD</span></Button>
                                </div>
                                <div className={classes.mail}>
                                    <Button variant='danger' size='lg' onClick={() => deleteScd(scd['generalDocumentId'])}><span>Delete SCD</span></Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className={classes.addscd}>
                    <Button variant='warning' size='lg' onClick={openAddScdModal}><span>Add SCD</span></Button>
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
                        show={addScdModal}
                        size='lg'
                        fullscreen={'below lg'}
                    >
                        <Modal.Header closeButton onClick={closeAddScdModal}>
                            <Modal.Title>Add SCD</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Document ID</Form.Label>
                                    <Form.Control
                                        id="addScdDocId"
                                        name="addScdDocId"
                                        type="text"
                                        placeholder="Enter an ID for Document"
                                        onChange={(e) => setAddScdDocId(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Document Name</Form.Label>
                                    <Form.Control
                                        id="addScdDocName"
                                        name="addScdDocName"
                                        type="text"
                                        placeholder="Enter the name of Document"
                                        onChange={(e) => setAddScdDocName(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Upload the Document</Form.Label>
                                    <Form.Control
                                        id='addScdDoc'
                                        name='addScdDoc'
                                        type="file"
                                        accept='.pdf'
                                        required
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='success' type='submit' onClick={addScd}>Add</Button>
                            <Button variant='secondary' onClick={closeAddScdModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default AdminSCDDocs;