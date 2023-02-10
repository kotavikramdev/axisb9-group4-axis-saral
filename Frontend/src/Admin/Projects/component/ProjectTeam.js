import React, { useEffect } from 'react';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import classes from '../style/ProjectTeam.module.css'
const ProjectTeam = (props) => {
    const navigate = useNavigate();
    const [filterData, setFilterData] = useState([]);
    const [empName, setEmpName] = useState("");
    useEffect(()=>{
        const result = props.team.filter(emp=>{
          return (emp.employeeId.toLowerCase().match(empName.toLowerCase()) || emp.employeeName.toLowerCase().match(empName.toLowerCase()));
      });  
      setFilterData(result);
     },[empName,props.team]);
  

    const columns = [
        {
            name: "Employee Id",
            selector: row => row.employeeId
        },
        {
            name: "Employee Name",
            selector: row => row.employeeName
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
            name: "Designation",
            selector: row => row.designation
        },
        // {
        //     name: "Explore",
        //     selector: row => <div>
        //         <button className={classes.explore} onClick={() => navigate("/employee-profile")}>View Profile</button>
        //     </div>
        // }
    ]

    return (
        <div className={classes.dataTable}>
            <p className={classes.heading}>Team Details</p>
            <form className={classes.table}>
                <DataTable columns={columns}
                    data={filterData}
                    subHeader
                    title=""
                    className={classes.tableStyle}
                    highlightOnHover
                    defaultSortAsc
                    style={classes.tableStyle}
                    subHeaderComponent={<input
                        type="text"
                        placeholder="Enter Employee Id or Employee Name"
                        className={classes.inputs}
                        value={empName}
                        onChange={(e) => setEmpName(e.target.value)} />} 
                    subHeaderAlign="center"
                />
            </form>
        </div>
    );
};

export default ProjectTeam;