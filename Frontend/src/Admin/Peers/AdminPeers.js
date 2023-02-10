import React from 'react';
import AdminHeader from '../GeneralComponents/component/AdminHeader';
import AdminFooter from '../GeneralComponents/component/AdminFooter';
import Peers from './component/Peers';

function AdminPeers(props) {
    return (
        <div>
            <AdminHeader />
            <Peers/>
            <AdminFooter />
        </div>
    );
}

export default AdminPeers;