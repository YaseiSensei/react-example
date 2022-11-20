import React from 'react'
import { useFormik } from 'formik';

export default function UseFormikSample() {

  const {handleSubmit,handleChange,values} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  return (
    <div>UseFormik

<form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" placeholder="Jane" onChange={handleChange} value={values.firstName} />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" placeholder="Doe" onChange={handleChange} value={values.lastName} />
            <br />
            <label htmlFor="email">Email</label>
            <input id="email" name="email" placeholder="jane@acme.com" type="email" onChange={handleChange} value={values.email} />

            <br />
            <span>Male</span>
            <input type="radio" name="gender" value="male" onChange={handleChange} checked={values.gender === 'male'} />
            <span>Female</span>
            <input type="radio" name="gender" value="female" onChange={handleChange} checked={values.gender === 'female'} />

            <br />

            <label htmlFor="power">Haki</label><input onChange={handleChange} type="checkbox" name='power' value={"Haki"}/> 
            <label htmlFor="power">Haoshoku Haki</label><input onChange={handleChange} type="checkbox"name='power' value={"Haoshoku Haki"}/>
            <label htmlFor="power">Akuma no mi</label><input onChange={handleChange} type="checkbox" name='power' value={"Akuma no mi"}/>
            
            <br />

            <select name="type" value={values.type} onChange={handleChange} >
              <option value="Kaizoku">Kaizoku</option>
              <option value="Marine">Marine</option>
            </select>

            <button type="submit">Submit</button>
            <code>{JSON.stringify(values)}</code>
          </form>
    </div>

  )
}
