import * as Yup from 'yup';
import "yup-phone";

export const updateSchema = Yup.object({
    mobileNumber: Yup.string('Enter valid 10 digit mobile number').phone().required('Please enter your mobile number'),
})