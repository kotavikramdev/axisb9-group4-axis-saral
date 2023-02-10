import React from 'react';
import Footer from '../GeneralComponents/component/Footer';
import Header from '../GeneralComponents/component/Header';
import Peers from './component/Peers';

function PeersPage(props) {
    return (
        <div>
            <Header/>
            <Peers/>
            <Footer/>
        </div>
    );
}

export default PeersPage;