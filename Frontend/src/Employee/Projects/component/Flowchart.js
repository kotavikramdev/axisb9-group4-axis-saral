import React from 'react';
import classes from '../style/Flowchart.module.css'
const Flowchart = (props) => {
    const flowchart = `data:image/jpeg;base64,${props.flowchart['document']}`;
    return (
        <div className={classes.flowchart}>
            <img src={flowchart} alt='Flowchart' />
        </div>
    );
};

export default Flowchart;