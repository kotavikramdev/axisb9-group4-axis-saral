import React from 'react';
import classes from '../style/Contact.module.css';

function Contact(props) {
    return (
        <div>
           <div className={classes.contactbar}>
                <h3>Contact Us</h3>
                <p><b>Email:</b> axisb9.asmg4@gmail.com</p>
                <p><b>Address:</b> No 9, Block A, MG Road, Bengaluru, Karnataka, 560001</p>
                <p></p>
           </div>
        </div>
    );
}

export default Contact;