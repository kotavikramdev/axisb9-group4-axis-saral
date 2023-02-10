import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import classes from '../style/Details.module.css';
import { Modal, Button } from "react-bootstrap";
import { Form } from 'react-bootstrap';
import axios from 'axios';


const Details = (props) => {
    const [filterData, setFilterData] = useState([]);
    const [stakeValue, setStakeValue] = useState("");
    const [addStakeholder, setAddStakeholder] = useState(false);
    const closeAddStakeholder = () => setAddStakeholder(false);
    const openAddStakeholder = () => setAddStakeholder(true);
    const token = 'Bearer ' + sessionStorage.getItem('jwtToken');
    const columns = [
        {
            name: "Stakeholder Id",
            selector: row => row.stakeholderId
        },
        {
            name: "Stakeholder Name",
            selector: row => row.stakeholderName
        },
        {
            name: "Email Id",
            selector: row => row.emailId
        },
        {
            name: "Mobile number",
            selector: row => row.mobileNumber
        },
        {
            name: "Action",
            selector: row => <div> <button className="w-100 btn btn-danger" onClick={() => deleteStakeholder(row.stakeholderId)}>Delete</button></div>
        }
    ]

    //Add Stakeholder
    const [addStakeholderId, setAddStakeholderId] = useState(null);
    const [addStakeholderMobile, setAddStakeholderMobile] = useState(null);
    const [addStakeholderName, setAddStakeholderName] = useState(null);
    const [addStakeholderEmailId, setAddStakeholderEmailId] = useState(null);


    function deleteStakeholder(stakeholderId) {
        axios.delete(
            `http://localhost:8711/delete-stakeholder/${stakeholderId}`,
            {
                'headers': {
                    'Authorization': `${token}`
                }
            }
        ).then((response) => {
            alert(response.data);
        }).catch((error) => {
            console.log(error.response.data);
        })
    }

    function addNewStakeholder() {
        let data = {
            stakeholderId: addStakeholderId,
            stakeholderName: addStakeholderName,
            emailId: addStakeholderEmailId,
            mobileNumber: addStakeholderMobile,
            projectId: props.projectId,
        }
        console.log(data);
        axios
            .post("http://localhost:8711/add-stakeholder", data,
                {
                    'headers': {
                        'Authorization': `${token}`
                    }
                })
            .then((response) => response.data)
            .then((data) => {
                if (data.length === 0) {
                    alert("Failed to add stakeHolder");
                } else {
                    alert("Stakeholder Added!");

                }
            });
    }

    useEffect(() => {
        const result = props.stakeholderData.filter(stakeholder => {
            return (stakeholder.stakeholderId.toLowerCase().match(stakeValue.toLowerCase()) || stakeholder.stakeholderName.toLowerCase().match(stakeValue.toLowerCase()));
        });
        setFilterData(result);
    }, [stakeValue, props.stakeholderData]);

    return (
        <div className={classes.details}>

            <span className={classes.heading}><p>Project Owner : {props.owner}
            </p></span>
            <span className={classes.heading}>
                <p>Deadline : {props.deadline}
                </p></span>
            <hr />
            <h5>Stakeholder Details</h5>
            <form className={classes.table}>
                <DataTable columns={columns}
                    data={filterData}
                    subHeader
                    title=""
                    highlightOnHover
                    // pagination
                    subHeaderComponent={<input

                        type="text"
                        placeholder="Enter Stakeholder Id or Stakeholder Name"
                        className={classes.inputs}
                        value={stakeValue}
                        onChange={(e) => setStakeValue(e.target.value)} />}
                    subHeaderAlign="center"

                />
            </form>
            <Button variant='success' className={classes.stakeholder} onClick={openAddStakeholder}>Add Stakeholder</Button>
            <div>
                <Modal
                    show={addStakeholder}
                    size='lg'
                    fullscreen={'below lg'}>
                    <Modal.Header closeButton onClick={closeAddStakeholder}>
                        <Modal.Title>Add Stakeholder</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Stakeholder ID</Form.Label>
                                <Form.Control
                                    id="addStakeholderId"
                                    name="addStakeholderId"
                                    type="text"
                                    placeholder="Enter a Stakeholder ID"
                                    autoComplete='off'
                                    onChange={(e) => setAddStakeholderId(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Stakeholder Name</Form.Label>
                                <Form.Control
                                    id="addStakeholderName"
                                    name="addStakeholderName"
                                    type="text"
                                    placeholder="Enter the name of Stakeholder"
                                    autoComplete='off'
                                    onChange={(e) => setAddStakeholderName(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control
                                    id="addMobileNumber"
                                    name="addMobileNumber"
                                    type="text"
                                    placeholder="Enter the mobile number of Stakeholder"
                                    autoComplete='off'
                                    onChange={(e) => setAddStakeholderMobile(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>EmailId</Form.Label>
                                <Form.Control
                                    id="addEmailId"
                                    name="addEmailId"
                                    type="text"
                                    placeholder="Enter the EmailId of Stakeholder"
                                    autoComplete='off'
                                    onChange={(e) => setAddStakeholderEmailId(e.target.value)}
                                    required
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='success' type='submit' onClick={addNewStakeholder}>Add</Button>
                        <Button variant='secondary' onClick={closeAddStakeholder}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Details;