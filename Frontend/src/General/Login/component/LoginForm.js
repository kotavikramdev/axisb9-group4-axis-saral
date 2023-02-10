import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { loginSchema } from '../schema/LoginSchema';
import classes from "../style/LoginForm.module.css"
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react';

const LoginForm = () => {
    const initialValues = {
        username: '',
        password: '',
    }
    const navigate = useNavigate();
    const baseUrl = 'http://localhost:8710';
    sessionStorage.setItem('auth', false);

    async function postLogin() {
        if (values.username === "axisb9.asmg4@gmail.com") {
            await axios.post(
                `http://localhost:8711/admin-login`,
                values
            ).then((response) => {
                sessionStorage.setItem('jwtToken', response.data.token);
                navigate('/admin-dashboard');
                sessionStorage.setItem('auth', true);
            }).catch((error) => {
                alert("Invalid Credentials")
                console.log(error.response.data);
            })
        } else {
            await axios.post(
                `${baseUrl}/employee-login`,
                values
            ).then((response) => {
                // console.log(response.data);
                sessionStorage.setItem('jwtToken', response.data.token);
                // console.log(response.data);
                getEmployeeDetailsByEmail(response.data.token);
                navigate('/dashboard');
                sessionStorage.setItem('auth', true);
            }).catch((error) => {
                alert("Invalid Credentials")
                console.log(error.response.data);
            })
        }
    }

    async function getEmployeeDetailsByEmail(token) {
        const token1 = 'Bearer ' + token;
        await axios.get(
            `${baseUrl}/employee-by-email/${values.username}`,
            {
                'headers': {
                    'Authorization': `${token1}`
                }
            }
        ).then((response) => {
            const emp = response.data;
            sessionStorage.setItem('currentProjectId', emp['currentProject']);
            sessionStorage.setItem('employeeId', emp['employeeId']);
            sessionStorage.setItem('employeeName', emp['employeeName']);
        }).catch((error) => {
            console.log(error.response.data);
        })
    }

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: (values, action) => {
            // console.log(values);
            postLogin(values);

        },
    });

    useEffect(() => {
        if (!sessionStorage.getItem('auth')) {
            navigate('/');
        }
    }, []);

    return (
        <div className={classes.login}>

            <form onSubmit={handleSubmit} className={classes.form}>
                <br />
                <h3 className={classes.heading}><b>Login</b></h3>
                <label className={classes.formlabel}>
                    Email
                    <input
                        className={classes.logininput}
                        type="text"
                        name='username'
                        value={values.username}
                        placeholder="Enter registered email Id"
                        onChange={handleChange}
                        autoComplete='off'
                    />{errors.username && touched.username ? (
                        <p className={classes.formerror}>{errors.username}</p>
                    ) : null}
                </label>
                <br />
                <label className={classes.formlabel}>
                    Password
                    <input className={classes.logininput}
                        type="password"
                        name='password'
                        value={values.password}
                        placeholder='Enter Password'
                        onChange={handleChange}
                        autoComplete='off'
                    />{errors.password && touched.password ? (
                        <p className={classes.formerror}>{errors.password}</p>
                    ) : null}
                </label>
                <br />
                <br />
                {/* <div className={classes.forgot}><p>Forgot Password? <span>
                    <a href='/forgot-password'>Reset Here
                    </a></span></p>
                </div> */}
                <button type="submit" className={classes.loginbutton}>Login</button>
                <br />
                <br />
            </form>

        </div>
    );
};

export default LoginForm;
