import * as Yup from 'yup';
export const loginSchema = Yup.object({
    
    username: Yup.string().email('Enter valid email id').required('Please enter your email'),
    
    password: Yup.string().min(6).required("Please enter your password"),
})