import * as yup from 'yup'

const Validations = yup.object().shape({
   
    email:yup.string().email().required('required field'),
    password:yup.string().min(5).required('required field'),
    passwordConfirm:yup.string().oneOf([yup.ref('password')],'Password does not match').required('required field')

});

export default Validations;