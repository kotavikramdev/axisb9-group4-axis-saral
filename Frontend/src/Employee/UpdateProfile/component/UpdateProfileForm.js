import { useFormik } from 'formik';
import React from 'react';
import classes from '../style/UpdateProfileForm.module.css'
import { updateSchema } from '../schema/updateSchema';

const UpdateProfileForm = (props) => {

    const initialValues = {
        mobileNumber: props.mobileNumber,
    }
    const profileImage = `data:image/jpeg;base64,${props.profileImage}`;
    var singleFileUploadInput = document.querySelector('#profilePhoto');
    function updateProfileData() {
        var formData1 = new FormData();
        formData1.append("mobileNumber", values.mobileNumber);
        var xhr1 = new XMLHttpRequest();
        xhr1.open("PUT", `http://localhost:8702/update-employee-from-employee/${sessionStorage.getItem('employeeId')}`);
        xhr1.onload = function () {
            console.log(xhr1.responseText);
            if (xhr1.status === 200) {
                console.log('Mobile Number Updated');
            } else {
                console.log("Error updating mobile number");
            }
        }
        xhr1.send(formData1);
        var formData2 = new FormData();
        formData2.append("file", singleFileUploadInput.files[0]);
        var xhr2 = new XMLHttpRequest();
        xhr2.open("PUT", `http://localhost:8708/update-profile-image/${sessionStorage.getItem('employeeId')}`);
        xhr2.onload = function () {
            console.log(xhr2.responseText);
            if (xhr2.status === 200) {
                console.log("Updated Image");
            } else {
                console.log("Error updating image");
            }
        }
        xhr2.send(formData2);
        alert("Updated Successfully");
    }
    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: updateSchema,
        onSubmit: (values, action) => {
            updateProfileData();
        },
    });
    console.log(errors);
    return (
        <div className={classes.update}>

            <form className={classes.form} onSubmit={handleSubmit}>
                <h3 className={classes.heading}>Update Profile</h3>
                <img src={profileImage} alt='Avtar' />
                <br />
                <label className={classes.formlabel}>
                    Mobile Number
                    <input className={classes.forminput}
                        name='mobileNumber'
                        type='text'
                        placeholder='Enter your mobile number'
                        value={values.mobileNumber}
                        id='mobileNumber'
                        onChange={handleChange}
                        autoComplete='off'
                    />
                    {errors.mobileNumber && touched.mobileNumber ? (
                        <p className={classes.formerror}>{errors.mobileNumber}</p>
                    ) : null}
                </label>
                <br />
                <label className={classes.formlabel}>
                    Profile Photo
                    <input className={classes.forminput}
                        name='profilePhoto'
                        type='file'
                        // placeholder='Select Your Profile Photo'
                        // value={values.profilePhoto}
                        id='profilePhoto'
                    // accept='.jpg, .jpeg, .png'
                    // autoComplete='off'
                    />
                    {/* {errors.profilePhoto && touched.profilePhoto ? (
                        <p className={classes.formerror}>{errors.profilePhoto}</p>
                    ) : null} */}
                </label>
                <br />
                <br />
                <button className={classes.updateButton} type='submit'>Update</button>
                <br />

            </form>

        </div>
    );
};

export default UpdateProfileForm;