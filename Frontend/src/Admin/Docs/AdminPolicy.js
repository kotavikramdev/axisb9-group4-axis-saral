import React from 'react';
import AdminFooter from '../GeneralComponents/component/AdminFooter';
import AdminHeader from '../GeneralComponents/component/AdminHeader';
import AdminPolicyDocs from './component/AdminPolicyDocs';

function AdminPolicy(props) {
    return (
        <div>
            <AdminHeader/>
            <AdminPolicyDocs/>
            <AdminFooter/>
        </div>
    );
}

export default AdminPolicy;