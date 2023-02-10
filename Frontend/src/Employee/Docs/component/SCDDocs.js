import React, { useEffect, useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import classes from '../style/SCDDocs.module.css';
import axios from 'axios';

function SCDDocs(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [scdDocs, setScdDocs] = useState(null);
    const baseUrl = `http://localhost:8706/general-documents-by-type/SCD`;

    const [showPDFModal, setShowPDFModal] = useState(false);
    const closePDFModal = () => setShowPDFModal(false);
    const openPDFModal = () => setShowPDFModal(true);
    const [viewDocument, setViewDocument] = useState(null);
    const [viewDocumentName, setViewDocumentName] = useState(null);
    // View SCD
    function viewScd(document, documentName) {
        setViewDocument(document);
        setViewDocumentName(documentName);
        openPDFModal();
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
                        <div className={classes.doc}>
                            <img src={require('../../../Images/DocIcon.png')} alt='PDF' />
                            <div className={classes.docmail}>
                                <div className={classes.docname}>
                                {scd['documentName']}
                                </div>
                                <div className={classes.mail}>
                                    <Button variant='success' size='lg' onClick={() => viewScd(scd['document'], scd['documentName'])}><span>View SCD</span></Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
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
            </div>
        </div>
    );
}

export default SCDDocs;