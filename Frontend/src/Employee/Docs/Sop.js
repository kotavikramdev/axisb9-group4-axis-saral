import React from 'react';
import Footer from '../GeneralComponents/component/Footer';
import Header from '../GeneralComponents/component/Header';
import SOPDocs from './component/SOPDocs';

function Sop(props) {
    return (
        <div>
            <Header/>
            <SOPDocs/>
            <Footer/>
        </div>
    );
}

export default Sop;