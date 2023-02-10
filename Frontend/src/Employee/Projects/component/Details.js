import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import classes from '../style/Details.module.css';

const Details = (props) => {
    const [filterData, setFilterData] = useState([]);
    const [stakeValue,setStakeValue] = useState("")
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
        }
    ]

    useEffect(()=>{
        const result = props.stakeholderData.filter(stakeholder=>{
          return (stakeholder.stakeholderId.toLowerCase().match(stakeValue.toLowerCase()) || stakeholder.stakeholderName.toLowerCase().match(stakeValue.toLowerCase()));
      });  
      setFilterData(result);
     },[stakeValue,props.stakeholderData]);

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

        </div>
    );
};

export default Details;