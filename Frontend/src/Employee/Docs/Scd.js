import React from 'react';
import Footer from '../GeneralComponents/component/Footer';
import Header from '../GeneralComponents/component/Header';
import SCDDocs from './component/SCDDocs';

function Scd(props) {
    return (
        <div>
            <Header/>
            <SCDDocs/>
            <Footer/>
        </div>
    );
}

export default Scd;