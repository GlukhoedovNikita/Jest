import * as yup from 'yup'

const yupSchema = yup.object().shape({
    name: yup.string().required('This field is required'),
    email: yup.string().required('This field is required').email('Incorrect mail'),
    password: yup.string().required('This field is required').min(3, 'Minimum field length - 3')
        .max(15, 'Maximum field length - 15'),
    repeatPassword: yup.string().required('This field is required')
        .oneOf([yup.ref('password'), null], 'Passwords do not match')
})

export default yupSchema
