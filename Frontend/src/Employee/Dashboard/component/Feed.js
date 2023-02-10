import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import classes from '../style/Feed.module.css';
import axios from 'axios';
import { format } from 'date-fns';

function Feed(props) {
    const token = sessionStorage.getItem('jwtToken');
    const baseUrl = 'http://localhost:8710';
    const epochValue = props.data['dateAndTime'];
    const dateNTime = (format(new Date(epochValue), 'dd/MM/yyyy HH:mm:ss'));

    // Add Comment
    const [newComment, setNewComment] = useState("");
    function addComment() {
        const commentedByName = sessionStorage.getItem('employeeName');
        const datetime = new Date();
        if (newComment !== "") {
            const commentObject = {
                comment: newComment,
                commentedBy: commentedByName,
                dateAndTime: datetime
            }
            axios.post(
                `${baseUrl}/add-comment/${props.data['feedId']}`,
                commentObject,
                {
                    'headers': {
                        'Authorization': `Bearer ${token}`
                    }
                }
            ).then((response) => {
                alert(response.data);
            })
                .catch((error) => {
                    alert(error.response.data);
                })
            setNewComment("");
        } else {
            alert("Comment cannot be Blank!");
        }
    }

    // Get Feed Image
    const [feedImage, setFeedImage] = useState(null);
    function getFeedImage() {
        axios.get(
            `http://localhost:8709/feed-image/${props.data['feedId']}`
        ).then((response) => {
            // console.log(response.data);
            setFeedImage(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        getFeedImage();
    }, [])
    if (feedImage === null) {
        return <div></div>
    }
    return (
        <div>
            <div className={classes.feedcard}>
                <Card>
                    <Card.Header>
                        <div className={classes.header}>
                            <img src={require('../../../Images/ProfileImage.png')} alt='Profile' />
                            <h3>{props.data['postedBy']}</h3>
                            <p>{dateNTime}</p>
                        </div>
                    </Card.Header>
                    <Card.Img variant="top" src={`data:image/jpeg;base64,${feedImage['feedImage']}`} className={classes.feedimage} />
                    <Card.Body>
                        <Card.Title>
                            <span className={classes.feedtitle}>{props.data['feedTitle']}</span>
                        </Card.Title>
                        <Card.Text>
                            <p className={classes.feedtext}>{props.data['caption']}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Comments</Accordion.Header>
                                <Accordion.Body>
                                    {props.data['comments'].map(comment => {
                                        return (
                                            <div className={classes.comment}>
                                                <img src={require('../../../Images/ProfileImage.png')} alt='Profile' />
                                                <div>
                                                    <h5>{comment['commentedBy']}</h5>
                                                    <p>{comment['comment']}</p>
                                                </div>
                                                <p>{(format(new Date(comment['dateAndTime']), 'dd/MM/yyyy HH:mm:ss'))}</p>
                                            </div>
                                        );
                                    })}
                                    <div className={classes.addcomment}>
                                        <Form onSubmit={addComment}>
                                            <Form.Group as={Row} className="mb-3">
                                                <Col sm='10'>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Add Comment"
                                                        value={newComment}
                                                        onChange={(e) => { setNewComment(e.target.value) }}
                                                        required
                                                    />
                                                </Col>
                                                <Col sm='2'>
                                                    <Button variant="outline-info" type="submit">Send</Button>
                                                </Col>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}

export default Feed;