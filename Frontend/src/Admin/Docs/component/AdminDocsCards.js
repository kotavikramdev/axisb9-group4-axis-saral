import React from 'react';
import AdminDocsCard from './AdminDocsCard';
import classes from '../style/AdminDocsCards.module.css';

function AdminDocsCards(props) {
    return (
        <div>
            <div className={classes.admindocscardsholder}>
                <AdminDocsCard
                    type='SOPs'
                    typeTitle='Standard Operating Procedures'
                    typeText='Documents like Database, Middleware, Incident Management, Project Management Team, etc'
                    link='sop'
                />
                <AdminDocsCard
                    type='SCDs'
                    typeTitle='Specification Control Document'
                    typeText='Documents like Operating Systems, Network Devices, etc'
                    link='scd'
                />
                <AdminDocsCard
                    type='Policies'
                    typeTitle='Policies within the Organization'
                    typeText='Documents like  Cyber Security Policy, BCP, Dress Codes, Code of Conduct & Ethics, Corporate Governance, Gifting Policy, etc'
                    link='policy'
                />
            </div>
        </div>
    );
}

export default AdminDocsCards;