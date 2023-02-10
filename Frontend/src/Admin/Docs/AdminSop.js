import React from 'react';
import AdminFooter from '../GeneralComponents/component/AdminFooter';
import AdminHeader from '../GeneralComponents/component/AdminHeader';
import AdminSOPDocs from './component/AdminSOPDocs';

function AdminSop(props) {
    return (
        <div>
            <AdminHeader/>
            <AdminSOPDocs/>
            <AdminFooter/>
        </div>
    );
}

export default AdminSop;