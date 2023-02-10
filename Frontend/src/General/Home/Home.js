import React from 'react';
import Contact from './component/Contact';
import Footer from '../../Employee/GeneralComponents/component/Footer';
import Header from './component/Header';
import ImageScroll from './component/ImageScroll';

function Home(props) {
    return (
        <div>
            <Header/>
            <ImageScroll/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Home;