import * as Yup from 'yup';
import "yup-phone";

export const updatePasswordSchema = Yup.object({

    password: Yup.string().required().min(6),
    confirmPassword: Yup.string().required()
        
        .oneOf([Yup.ref("password"), null], "Password must match"),
})