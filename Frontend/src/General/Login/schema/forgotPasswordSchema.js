import * as Yup from 'yup';

export const forgotPasswordSchema = Yup.object({
   
    email: Yup.string().email('someone@example.com').required('Please enter your email'),
    otp: Yup.string().required("Enter 4 digit otp"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Password must match"),
})