import React, { useEffect, useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import classes from '../style/AdminSOPDocs.module.css';
import axios from 'axios';

function AdminSOPDocs(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [sopDocs, setSopDocs] = useState(null);
    const baseUrl = `http://localhost:8706/general-documents-by-type/SOP`;

    const [showPDFModal, setShowPDFModal] = useState(false);
    const closePDFModal = () => setShowPDFModal(false);
    const openPDFModal = () => setShowPDFModal(true);

    const [addSopModal, setAddSopModal] = useState(false);
    const closeAddSopModal = () => setAddSopModal(false);
    const openAddSopModal = () => setAddSopModal(true);

    const [viewDocument, setViewDocument] = useState(null);
    const [viewDocumentName, setViewDocumentName] = useState(null);
    // View SOP 
    function viewSop(document, documentName) {
        setViewDocument(document);
        setViewDocumentName(documentName);
        openPDFModal();
    }
    // Delete SOP 
    function deleteSop(documentId) {
        axios.delete(
            `http://localhost:8706/delete-general-document/${documentId}`
        ).then((response) => {
            alert(response.data);
        }).catch((error) => {
            alert(error.response.data);
        })
    }
    // Add SOP 
    const [addSopDocId, setAddSopDocId] = useState('');
    const [addSopDocName, setAddSopDocName] = useState('');
    var singleFileUploadInput = document.querySelector('#addSopDoc');
    function addSop(event) {
        event.preventDefault();
        var files = singleFileUploadInput.files;
        var formData = new FormData();
        formData.append("generalDocumentId", addSopDocId);
        formData.append("documentName", addSopDocName);
        formData.append("document", files[0]);
        formData.append("documentType", "SOP");
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
            messageSubject: "Updated SOPs by Adding new Document",
            messageBody: `Hello All! The new SOP Document (${addSopDocName}) has been added by Administrator. Kindly take a look at it. ThankYou!`
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
            setSopDocs(response.data);
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
                <h3>SOP Docs</h3>
                {sopDocs.map(sop => {
                    return (
                        <div className={classes.admindoc}>
                            <img src={require('../../../Images/DocIcon.png')} alt='PDF' />
                            <div className={classes.docmail}>
                                <div className={classes.docname}>
                                    {sop['documentName']}
                                </div>
                                <div className={classes.mail}>
                                    <Button variant='success' size='lg' onClick={() => viewSop(sop['document'], sop['documentName'])}><span>View SOP</span></Button>
                                </div>
                                <div className={classes.mail}>
                                    <Button variant='danger' size='lg' onClick={() => deleteSop(sop['generalDocumentId'])}><span>Delete SOP</span></Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className={classes.addsop}>
                    <Button variant='warning' size='lg' onClick={openAddSopModal}><span>Add SOP</span></Button>
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
                        show={addSopModal}
                        size='lg'
                        fullscreen={'below lg'}
                    >
                        <Modal.Header closeButton onClick={closeAddSopModal}>
                            <Modal.Title>Add SOP</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Document ID</Form.Label>
                                    <Form.Control
                                        id="addSopDocId"
                                        name="addSopDocId"
                                        type="text"
                                        placeholder="Enter an ID for Document"
                                        onChange={(e) => setAddSopDocId(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Document Name</Form.Label>
                                    <Form.Control
                                        id="addSopDocName"
                                        name="addSopDocName"
                                        type="text"
                                        placeholder="Enter the name of Document"
                                        onChange={(e) => setAddSopDocName(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Upload the Document</Form.Label>
                                    <Form.Control
                                        id='addSopDoc'
                                        name='addSopDoc'
                                        type="file"
                                        accept='.pdf'
                                        required
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='success' type='submit' onClick={addSop}>Add</Button>
                            <Button variant='secondary' onClick={closeAddSopModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default AdminSOPDocs;