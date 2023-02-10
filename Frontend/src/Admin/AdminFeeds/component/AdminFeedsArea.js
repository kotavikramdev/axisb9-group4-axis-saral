import React, { useEffect, useState } from 'react';
import classes from '../style/AdminFeedsArea.module.css';
import { Modal, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import AdminFeed from './AdminFeed';
import axios from 'axios';

function AdminFeedsArea(props) {
    const addFeedStyle = {
        'textAlign': 'center',
        'marginTop': '1rem'
    }

    const [adminFeeds, setAdminFeeds] = useState(null);
    const token = sessionStorage.getItem('jwtToken');
    const baseUrl = 'http://localhost:8711';

    // Get Admin Feeds
    async function getAdminFeedsData() {
        await axios.get(
            `${baseUrl}/feeds-by-postedby/Administrator`,
            {
                'headers': {
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then((response) => {
            // console.log(response.data);
            setAdminFeeds(() => response.data.sort((a,b)=>b.dateAndTime-a.dateAndTime));
        }).catch((error) => {
            console.log(error.response.data);
        })
    }

    const [addFeedModal, setAddFeedModal] = useState(false);
    const closeAddFeedModal = () => setAddFeedModal(false);
    const openAddFeedModal = () => setAddFeedModal(true);
    // Add Feed
    const [addFeedId, setAddFeedId] = useState('');
    const [addFeedTitle, setAddFeedTitle] = useState('');
    const [addFeedCaption, setAddFeedCaption] = useState('');
    var singleFileUploadInput = document.querySelector('#addFeedImage');
    function addFeed(event) {
        const datetime = new Date();
        event.preventDefault();
        var files = singleFileUploadInput.files;
        var formData = new FormData();
        formData.append("feedId", addFeedId);
        formData.append("file", files[0]);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8709/feed-image/add");
        xhr.onload = function () {
            console.log(xhr.responseText);
            if (xhr.status === 200) {
                console.log("Feed Image Added Successfully");
            } else {
                console.log("Error occured while adding Feed Image");
            }
        }
        xhr.send(formData);
        const feedObject = {
            feedId: addFeedId,
            feedTitle: addFeedTitle,
            caption: addFeedCaption,
            postedBy: "Administrator",
            dateAndTime: datetime
        }
        axios.post(
            `${baseUrl}/add-feed`, feedObject,
            {
                'headers': {
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then((response) => {
            console.log("Feed Added");
        }).catch((error) => {
            console.log(error.response.data);
        })
        alert("Feed Added Successfully");
        sendNotification();
    }

    // Send Notification
    function sendNotification() {
        const emailDetails = {
            emailId: ["kotavikramdev@gmail.com"],
            messageSubject: "New Feed has been added by Administrator",
            messageBody: "Hello All! The new feed has been posted by Administrator. Kindly take a look at it and give your feedback in comments. ThankYou!"
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
        getAdminFeedsData();
    }, []);

    if (adminFeeds === null) {
        return (<div></div>);
    }
    return (
        <div>
            <div style={addFeedStyle}>
                <Button variant='warning' size='lg' onClick={openAddFeedModal}><span>Add Feed</span></Button>
            </div>
            <div className={classes.adminfeedsspace}>
                {/* <AddFeed /> */}
                {adminFeeds.map(adminFeed => {
                    return <AdminFeed key={adminFeed['feedId']} data={adminFeed} />
                })}
            </div>
            <div>
                <Modal
                    show={addFeedModal}
                    size='lg'
                    fullscreen={'below lg'}
                >
                    <Modal.Header closeButton onClick={closeAddFeedModal}>
                        <Modal.Title>Add Feed</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Feed ID</Form.Label>
                                <Form.Control
                                    id="addFeedId"
                                    name="addFeedId"
                                    type="text"
                                    placeholder="Enter an ID for Feed"
                                    onChange={(e) => setAddFeedId(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Feed Title</Form.Label>
                                <Form.Control
                                    id="addFeedTitle"
                                    name="addFeedTitle"
                                    type="text"
                                    placeholder="Enter the Feed Title"
                                    onChange={(e) => setAddFeedTitle(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Feed Caption</Form.Label>
                                <Form.Control
                                    id="addFeedCaption"
                                    name="addFeedCaption"
                                    type="text"
                                    placeholder="Enter the Feed Caption"
                                    onChange={(e) => setAddFeedCaption(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Upload an Image</Form.Label>
                                <Form.Control
                                    id='addFeedImage'
                                    name='addFeedImage'
                                    type="file"
                                    accept='.jpg, .jpeg, .png'
                                    required
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='success' type='submit' onClick={addFeed}>Add</Button>
                        <Button variant='secondary' onClick={closeAddFeedModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default AdminFeedsArea;