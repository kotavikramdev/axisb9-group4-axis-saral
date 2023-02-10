import React, { useState } from 'react';
import AdminFooter from '../GeneralComponents/component/AdminFooter';
import AdminHeader from '../GeneralComponents/component/AdminHeader';
import UpdateEmployeeForm from './component/UpdateEmployeeForm';
import { useLocation } from 'react-router-dom';
import EmployeeDocuments from './component/EmployeeDocuments';

function UpdateEmployee(props) {
    const location = useLocation();
    const employeeId = useState(location.state.employeeId);
    const designation = useState(location.state.designation);
    const supervisor = useState(location.state.supervisor);
    const currentProject = useState(location.state.currentProject);
    const salary = useState(location.state.salary);
    const updateEmployeeStyle = {
        'display': 'flex',
        'justifyContent': 'space-around'
    }
    return (
        <div>
            <AdminHeader />
            <div style={updateEmployeeStyle}>
                <UpdateEmployeeForm employeeId={employeeId[0]} designation={designation[0]} supervisor={supervisor[0]} currentProject={currentProject[0]} salary={salary[0]} />
                <EmployeeDocuments employeeId={employeeId[0]} />
            </div>
            <AdminFooter />
        </div>
    );
}

export default UpdateEmployee;