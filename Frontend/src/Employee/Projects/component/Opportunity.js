import React from 'react';
import classes from '../style/Opportuinity.module.css';
const Opportunity = (props) => {
    const opportunity = 5-props.teamSize;
    return (

            <div className={classes.opportuinity}>
            <h2>Opportunities</h2>
            <p>Number of opportunity present in project are : {opportunity}</p>
            </div>

    );
};

export default Opportunity;