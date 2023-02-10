import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import { Form } from 'react-bootstrap';
import classes from '../style/AllProjects.module.css'
import ProjectCard from './ProjectCard';
function AllProjects(props) {
  // const current=new Date();
  const [filterData, setFilterData] = useState([]);
  const [projParam, setProjParam] = useState("");
  const [addProject, setAddProject] = useState(false);
  const closeAddProject = () => setAddProject(false);
  const openAddProject = () => setAddProject(true);
  const [projects, setProjects] = useState([]);
  const baseUrl = 'http://localhost:8711';
  const token = 'Bearer ' + sessionStorage.getItem('jwtToken');
  async function getProjectDetails() {
    await axios
      .get(`${baseUrl}/projects`,
        {
          'headers': {
            'Authorization': `${token}`
          }
        })
      .then((response) => {

        setProjects(response.data);
        // console.log(projects);

      }).catch((error) => {

        console.log(error.response.data);
      });
  }

  // Add Project
  const [addProjectId, setAddProjectId] = useState('');
  const [addProjectName, setAddProjectName] = useState('');
  const [addProjectOwner, setAddProjectOwner] = useState('');
  const [addProjectDescription, setAddProjectDescription] = useState('');
  const [addDeadline, setAddDeadline] = useState('');
  const [flag1,setFlag1] = useState(false);
  const [flag2,setFalg2] = useState(false);
  var singleFileUploadInput = document.querySelector('#addFlowchart');
  function addNewProject(event) {
    event.preventDefault();

    let data = {
      projectId:addProjectId,
      projectName:addProjectName,
      projectDescription:addProjectDescription,
      projectOwner:addProjectOwner,
      teamSize: 5,
      projectStatus:'Live',
      deadline:addDeadline

  };

  axios
        .post("http://localhost:8711/add-project", data,
        {
          'headers': {
            'Authorization': `${token}`
          }
        })
        .then((response) => response.data)
        .then((data) => {
          if (data.length === 0) {
            console.log("Failed to add project");
          } else {
            console.log("Project Added!");
            setFlag1(true);
          }
        });

    var formData = new FormData();
    formData.append("projectDocumentId", addProjectId);
    formData.append("documentName", 'Flowchart');
    formData.append("document", singleFileUploadInput.files[0]);
    formData.append("projectId", addProjectId);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8707/project-document/add");
    xhr.onload = function () {
      // console.log(xhr.responseText);
      if (xhr.status === 200) {
        console.log("Flowchart Added Successfully");
        setFalg2(true);
      } else {
        console.log("Error occured while Adding Flowchart");
      }
    }
    xhr.send(formData);

    if(flag1 && flag2){
      alert("Project added successfully!!");
      closeAddProject();
      window.location.reload();
    }
    else{
      alert("Error adding project");
    }

  }

  useEffect(() => {
    getProjectDetails();
  }, []);


  useEffect(() => {
    const result = projects.filter(proj => {
      return (proj.projectId.toLowerCase().match(projParam.toLowerCase()) || proj.projectName.toLowerCase().match(projParam.toLowerCase()));
    });
    setFilterData(result);
  }, [projParam, projects]);

  return (
    <div>
      <div className={classes.search}>
        <input type='text'
          placeholder='Enter Project Id or Project Name '
          value={projParam}
          onChange={(e) => setProjParam(e.target.value)}>
        </input>
      </div>
      <div className={classes.search}>
        <button className='btn btn-success' onClick={openAddProject}>Add Project</button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {
          filterData.map((project) =>
            <ProjectCard
              projectData={project}
            />
          )}

      </div>
      <div>
        <Modal
          show={addProject}
          size='lg'
          fullscreen={'below lg'}>
          <Modal.Header closeButton onClick={closeAddProject}>
            <Modal.Title>Add Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={()=>{addNewProject()}}>
              <Form.Group className="mb-3">
                <Form.Label>Project ID</Form.Label>
                <Form.Control
                  id="addProjectId"
                  name="addProjectId"
                  type="text"
                  placeholder="Enter an ID for Project"
                  onChange={(e) => setAddProjectId(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Project Name</Form.Label>
                <Form.Control
                  id="addProjectName"
                  name="addProjectName"
                  type="text"
                  placeholder="Enter the name of Project"
                  onChange={(e) => setAddProjectName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Project Description</Form.Label>
                <Form.Control
                  id="addDescription"
                  name="addDescription"
                  type="text"
                  placeholder="Enter the Project Description"
                  onChange={(e) => setAddProjectDescription(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Project Owner</Form.Label>
                <Form.Control
                  id="addProjectOwner"
                  name="addProjectOwner"
                  type="text"
                  placeholder="Enter the Project Owner"
                  onChange={(e) => setAddProjectOwner(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Project Deadline</Form.Label>
                <Form.Control
                  id="addDeadline"
                  name="addDeadline"
                  type="date"
                  placeholder="Select the Project Deadline"
                  // min={current}
                  onChange={(e) => setAddDeadline(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Upload the Flowchart</Form.Label>
                <Form.Control
                  id='addFlowchart'
                  name='addFlowchart'
                  type="file"
                  accept='.jpg, .jpeg, .png'
                  required
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='success' type='submit'>Add</Button>
            <Button variant='secondary' onClick={closeAddProject}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default AllProjects;