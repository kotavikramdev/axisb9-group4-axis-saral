import React, { useState } from 'react';
import classes from '../style/UpdateEmployeeForm.module.css';
import { useNavigate } from 'react-router-dom';

function UpdateEmployeeForm(props) {
    const updatingEmployeeId = {
        'textAlign':'center',
        'margin':'0'
    }
    const navigate = useNavigate();
    const [newDesignation, setNewDesignation] = useState(props.designation);
    const [newSupervisor, setNewSupervisor] = useState(props.supervisor);
    const [newCurrentProject, setNewCurrentProject] = useState(props.currentProject);
    const [newSalary, setNewSalary] = useState(props.salary);
    function updateEmployee() {
        var formData = new FormData();
        formData.append("designation", newDesignation);
        formData.append("supervisor", newSupervisor);
        formData.append("currentProject", newCurrentProject);
        formData.append("salary", newSalary);
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", `http://localhost:8702/update-employee-from-admin/${props.employeeId}`);
        xhr.onload = function () {
            console.log(xhr.responseText);
            if (xhr.status === 200) {
                console.log('Updated Employee Details');
            } else {
                console.log("Error updating details");
            }
        }
        xhr.send(formData);
        alert("Updated Employee Data");
        navigate('/admin-peers');
    }
    return (
        <div>
            <div className={classes.update}>
                <form className={classes.form} onSubmit={updateEmployee}>
                    <h3 className={classes.heading}>Update Employee</h3>
                    <h6 style={updatingEmployeeId}>Employee ID: {props.employeeId}</h6>
                    <br />
                    <label className={classes.formlabel}>
                        Supervisor
                        <input className={classes.forminput}
                            name='newSupervisor'
                            type='text'
                            defaultValue={props.supervisor}
                            placeholder='Enter New Manager ID'
                            onChange={(e) => setNewSupervisor(e.target.value)}
                            id='newSupervisor'
                        />
                    </label>
                    <br />
                    <label className={classes.formlabel}>
                        Current Project
                        <input className={classes.forminput}
                            name='newCurrentProject'
                            type='text'
                            defaultValue={props.currentProject}
                            placeholder='Enter the Updated Current Project ID'
                            onChange={(e) => setNewCurrentProject(e.target.value)}
                            id='newCurrentProject'
                        />
                    </label>
                    <br />
                    <label className={classes.formlabel}>
                        Designation
                        <select
                            className={classes.dropdown}
                            name='newDesignation'
                            defaultValue={props.designation}
                            type='text'
                            placeholder='Update Designation of Employee'
                            onChange={(e) => setNewDesignation(e.target.value)}
                            id='newDesignation'
                        >
                            <option value={"Developer"}>Developer</option>
                            <option value={"Tester"}>Tester</option>
                            <option value={"Support"}>Support</option>
                        </select>
                    </label>
                    <br />
                    <label className={classes.formlabel}>
                        Salary
                        <input className={classes.forminput}
                            name='newSalary'
                            type='number'
                            defaultValue={props.salary}
                            placeholder='Update the Salary'
                            onChange={(e) => setNewSalary(e.target.value)}
                            id='newSalary'
                        />
                    </label>
                    <br />
                    <button className={classes.updateButton} type='submit'>Update</button>
                    <br />
                </form>
            </div>
        </div>
    );
}

export default UpdateEmployeeForm;