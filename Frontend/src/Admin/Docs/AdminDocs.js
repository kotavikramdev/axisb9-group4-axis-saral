import React from 'react';
import AdminFooter from '../GeneralComponents/component/AdminFooter';
import AdminHeader from '../GeneralComponents/component/AdminHeader';
import AdminDocsCards from './component/AdminDocsCards';

function AdminDocs(props) {
    return (
        <div>
            <AdminHeader/>
            <AdminDocsCards/>
            <AdminFooter/>
        </div>
    );
}

export default AdminDocs;