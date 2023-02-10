import React from 'react';
import Footer from '../GeneralComponents/component/Footer';
import Header from '../GeneralComponents/component/Header';
import DocsCards from './component/DocsCards';

function Docs(props) {
    return (
        <div>
            <Header/>
            <DocsCards/>
            <Footer/>
        </div>
    );
}

export default Docs;