import React from 'react';
import DocsCard from './DocsCard';
import classes from '../style/DocsCards.module.css';

function DocsCards(props) {
    return (
        <div>
            <div className={classes.docscardsholder}>
                <DocsCard
                    type='SOPs'
                    typeTitle='Standard Operating Procedures'
                    typeText='Documents like Database, Middleware, Incident Management, Project Management Team, etc'
                    link='sop'
                />
                <DocsCard
                    type='SCDs'
                    typeTitle='Specification Control Document'
                    typeText='Documents like Operating Systems, Network Devices, etc'
                    link='scd'
                />
                <DocsCard
                    type='Policies'
                    typeTitle='Policies within the Organization'
                    typeText='Documents like  Cyber Security Policy, BCP, Dress Codes, Code of Conduct & Ethics, Corporate Governance, Gifting Policy, etc'
                    link='policy'
                />
            </div>
        </div>
    );
}

export default DocsCards;