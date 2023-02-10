import React, { useEffect, useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import classes from '../style/AdminPolicyDocs.module.css';
import axios from 'axios';

function AdminPolicyDocs(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [policyDocs, setPolicyDocs] = useState(null);
    const baseUrl = `http://localhost:8706/general-documents-by-type/Policy`;

    const [showPDFModal, setShowPDFModal] = useState(false);
    const closePDFModal = () => setShowPDFModal(false);
    const openPDFModal = () => setShowPDFModal(true);

    const [addPolicyModal, setAddPolicyModal] = useState(false);
    const closeAddPolicyModal = () => setAddPolicyModal(false);
    const openAddPolicyModal = () => setAddPolicyModal(true);

    const [viewDocument, setViewDocument] = useState(null);
    const [viewDocumentName, setViewDocumentName] = useState(null);
    // View Policy 
    function viewPolicy(document, documentName) {
        setViewDocument(document);
        setViewDocumentName(documentName);
        openPDFModal();
    }
    // Delete Policy 
    function deletePolicy(documentId) {
        axios.delete(
            `http://localhost:8706/delete-general-document/${documentId}`
        ).then((response) => {
            alert(response.data);
        }).catch((error) => {
            alert(error.response.data);
        })
    }
    // Add Policy
    const [addPolicyDocId, setAddPolicyDocId] = useState('');
    const [addPolicyDocName, setAddPolicyDocName] = useState('');
    var singleFileUploadInput = document.querySelector('#addPolicyDoc');
    function addPolicy(event) {
        event.preventDefault();
        var files = singleFileUploadInput.files;
        var formData = new FormData();
        formData.append("generalDocumentId", addPolicyDocId);
        formData.append("documentName", addPolicyDocName);
        formData.append("document", files[0]);
        formData.append("documentType", "Policy");
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
            messageSubject: "Updated Policies by Adding new Document",
            messageBody: `Hello All! The new Policy Document (${addPolicyDocName}) has been added by Administrator. Kindly take a look at it. ThankYou!`
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
            setPolicyDocs(response.data);
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
                <h3>Policy Docs</h3>
                {policyDocs.map(policy => {
                    return (
                        <div className={classes.admindoc}>
                            <img src={require('../../../Images/DocIcon.png')} alt='PDF' />
                            <div className={classes.docmail}>
                                <div className={classes.docname}>
                                    {policy['documentName']}
                                </div>
                                <div className={classes.mail}>
                                    <Button variant='success' size='lg' onClick={() => viewPolicy(policy['document'], policy['documentName'])}><span>View Policy</span></Button>
                                </div>
                                <div className={classes.mail}>
                                    <Button variant='danger' size='lg' onClick={() => deletePolicy(policy['generalDocumentId'])}><span>Delete Policy</span></Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className={classes.addpolicy}>
                    <Button variant='warning' size='lg' onClick={openAddPolicyModal}><span>Add Policy</span></Button>
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
                        show={addPolicyModal}
                        size='lg'
                        fullscreen={'below lg'}
                    >
                        <Modal.Header closeButton onClick={closeAddPolicyModal}>
                            <Modal.Title>Add Policy</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Document ID</Form.Label>
                                    <Form.Control
                                        id="addPolicyDocId"
                                        name="addPolicyDocId"
                                        type="text"
                                        placeholder="Enter an ID for Document"
                                        onChange={(e) => setAddPolicyDocId(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Document Name</Form.Label>
                                    <Form.Control
                                        id="addPolicyDocName"
                                        name="addPolicyDocName"
                                        type="text"
                                        placeholder="Enter the name of Document"
                                        onChange={(e) => setAddPolicyDocName(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Upload the Document</Form.Label>
                                    <Form.Control
                                        id='addPolicyDoc'
                                        name='addPolicyDoc'
                                        type="file"
                                        accept='.pdf'
                                        required
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='success' type='submit' onClick={addPolicy}>Add</Button>
                            <Button variant='secondary' onClick={closeAddPolicyModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default AdminPolicyDocs;