import { useFormik } from 'formik';
import React from 'react';
import classes from '../style/ForgotPassword.module.css'
import {forgotPasswordSchema} from '../schema/forgotPasswordSchema'
const initialValues = {
    email: '',
    password: '',
    otp: '',
}

const ForgotPassword = () => {
    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: forgotPasswordSchema,
        onSubmit: (values, action) => {
            console.log(values);

        },
    });
    return (
        <div className={classes.login}>
            <form onSubmit={handleSubmit} className={classes.form}>
                <br />
                <h3 className={classes.heading}>Forgot Password</h3>
                <label className={classes.formlabel}>Email Id</label>
                <input className={classes.logininput}
                    type='email'
                    name='email'
                    value={values.email}
                    placeholder="Enter registered email Id"
                    onChange={handleChange}
                    autoComplete='off'

                />{errors.email && touched.email ? (
                    <p className={classes.formerror}>{errors.email}</p>
                ) : null}
                <label className={classes.formlabel}>Verification Code</label>
                <input className={classes.logininput}
                    type='number'
                    placeholder='Enter Verification Code'
                    name='otp'
                    value={values.otp}
                    onChange={handleChange}
                    autoComplete='off'

                />
                {errors.otp && touched.otp ? (
                    <p className={classes.formerror}>{errors.otp}</p>
                ) : null}
                <label className={classes.formlabel}>Password</label>
                <input className={classes.logininput}
                    type='password'
                    name='password'
                    value={values.password}
                    placeholder='Enter Password'
                    onChange={handleChange}
                    autoComplete='off'
                />{errors.password && touched.password ? (
                    <p className={classes.formerror}>{errors.password}</p>
                ) : null}
                <label className={classes.formlabel}>Confirm Password</label>
                <input className={classes.logininput}
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm your password'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    autoComplete='off'

                /> {errors.confirmPassword && touched.confirmPassword ? (
                    <p className={classes.formerror}>{errors.confirmPassword}</p>
                ) : null}
                <br />
                <button className={classes.forgotButton}>Update Password</button>
                <br /><br />
            </form>

        </div>
    );
};

export default ForgotPassword;