import React from 'react';
import classes from '../style/ProblemStatement.module.css'
const ProblemStatement = (props) => {
    return (
        <div className={classes.ProblemStatement}>
            <h2>{props.projectName}</h2>
            
           <span>Project Description</span> <p>{props.projectDescription}</p>
        </div>
    );
};

export default ProblemStatement;