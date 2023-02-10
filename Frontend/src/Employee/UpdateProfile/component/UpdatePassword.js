import { useFormik } from 'formik';
import classes from '../style/UpdatePassword.module.css'
import { updatePasswordSchema } from '../schema/updatePasswordSchema';
import React from 'react';

const UpdatePassword = () => {
    const initialValues = {
        password: '',
        confirmPassword: '',
    }
    function changePassword() {
        var formData = new FormData();
        formData.append("password", values.password);
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", `http://localhost:8702/update-password/${sessionStorage.getItem('employeeId')}`);
        xhr.onload = function () {
            console.log(xhr.responseText);
            if (xhr.status === 200) {
                console.log('Password Updated');
            } else {
                console.log("Error updating password");
            }
        }
        xhr.send(formData);
        alert("Password Updated Successfully");
    }
    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: updatePasswordSchema,
        onSubmit: (values, action) => {
            changePassword();
        },
    });
    return (
        <div className={classes.update}>
        <form className={classes.form} onSubmit={handleSubmit}>
            <h3 className={classes.heading}>Update Password</h3>
            <br />
            <label className={classes.formlabel}>
                Password
                <input className={classes.forminput}
                    name='password'
                    type='password'
                    placeholder='Enter Password'
                    value={values.password}
                    id='password'
                    onChange={handleChange}
                    autoComplete='off'
                />
                {errors.password && touched.password ? (
                    <p className={classes.formerror}>{errors.password}</p>
                ) : null}
            </label>
            <br />
            <label className={classes.formlabel}>
                Confirm Password
                <input className={classes.forminput}
                    name='confirmPassword'
                    type='password'
                    placeholder='Confirm your password'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    autoComplete='off'
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                    <p className={classes.formerror}>{errors.confirmPassword}</p>
                ) : null}
            </label>
            <br />
            <br />
            <button className={classes.updateButton} type='submit'>Update</button>
            <br />
        
        </form>

    </div>
    );
};

export default UpdatePassword;