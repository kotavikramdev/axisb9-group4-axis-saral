import React from 'react';
import AdminFooter from '../GeneralComponents/component/AdminFooter';
import AdminHeader from '../GeneralComponents/component/AdminHeader';
import AdminSCDDocs from './component/AdminSCDDocs';

function AdminScd(props) {
    return (
        <div>
            <AdminHeader/>
            <AdminSCDDocs/>
            <AdminFooter/>
        </div>
    );
}

export default AdminScd;