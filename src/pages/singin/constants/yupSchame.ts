import * as yup from 'yup'

const yupSchema = yup.object().shape({
    email: yup.string().required('This field is required').email('Incorrect mail'),
    password: yup.string().required('This field is required').min(3, 'Minimum field length - 3')
        .max(15, 'Maximum field length - 15')
})

export default yupSchema
