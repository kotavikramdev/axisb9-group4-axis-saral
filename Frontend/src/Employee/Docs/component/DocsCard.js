import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import classes from '../style/DocsCard.module.css';

function DocsCard(props) {
    return (
        <div>
            <div className={classes.docscard}>
                <Card>
                    <Card.Header><span className={classes.docscardheader}>{props.type}</span></Card.Header>
                    <Card.Body>
                        <Card.Title>{props.typeTitle}</Card.Title>
                        <Card.Text>
                            {props.typeText}
                        </Card.Text>
                        <Link to={props.link}><Button variant="secondary">Explore</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default DocsCard;