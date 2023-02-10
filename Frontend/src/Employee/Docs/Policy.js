import React from 'react';
import Footer from '../GeneralComponents/component/Footer';
import Header from '../GeneralComponents/component/Header';
import PolicyDocs from './component/PolicyDocs';

function Policy(props) {
    return (
        <div>
            <Header/>
            <PolicyDocs/>
            <Footer/>
        </div>
    );
}

export default Policy;