import React from 'react';
import Footer from '../GeneralComponents/component/Footer';
import Header from '../GeneralComponents/component/Header';
import MyFeedsArea from './component/MyFeedsArea';

function MyFeeds(props) {
    return (
        <div>
            <Header />
            <MyFeedsArea />
            <Footer />
        </div>
    );
}

export default MyFeeds;