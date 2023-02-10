import React from 'react';
import AdminFooter from '../GeneralComponents/component/AdminFooter';
import AdminHeader from '../GeneralComponents/component/AdminHeader';
import AdminFeedsArea from './component/AdminFeedsArea';

function AdminFeeds(props) {
    return (
        <div>
            <AdminHeader/>
            <AdminFeedsArea />
            <AdminFooter/>
        </div>
    );
}

export default AdminFeeds;