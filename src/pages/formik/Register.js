import React from 'react'
import { useFormik } from 'formik';
import Validations from './Validations'
export default function Register() {
    
    const { handleSubmit, handleChange, handleBlur,values,errors,touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: ''

        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema:Validations
    });
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>

                <input  name="email" placeholder="Email" onChange={handleChange} value={values.email} onBlur={handleBlur} />
                {errors.email && touched.email && (<pre style={{color:"red"}}>{errors.email}</pre>)}

                <br /><br />
                <input  name="password" placeholder="Password" onChange={handleChange} value={values.password} onBlur={handleBlur}/>
                {errors.password && touched.password && (<pre style={{color:"red"}}>{errors.password}</pre>)}

                <br /><br />
                <input  name="passwordConfirm" placeholder="Re-Password" onChange={handleChange} value={values.passwordConfirm} onBlur={handleBlur}/>
                {errors.passwordConfirm && touched.passwordConfirm && (<pre style={{color:"red"}}>{errors.passwordConfirm}</pre>)}

                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
