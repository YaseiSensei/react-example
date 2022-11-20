import React from 'react'
import { Formik, Field, Form } from 'formik';

export default function FormikSample() {




  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: 'Luffy',
          lastName: 'Monkey D',
          email: 'SunnyGo@yonkou.op',
          gender: 'male',
          power: [],
          type: ''

        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form  >
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />

          <br />
          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <br />
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="jane@acme.com" type="email" />

          <br />
          <span>Male</span>
          <Field type="radio" name="gender" value="male" />
          <span>Female</span>
          <Field type="radio" name="gender" value="female" />



          <br />
          <label >Haki</label><Field type="checkbox" name='power' value={"Haki"} />
          <label>Haoshoku Haki</label><Field type="checkbox" name='power' value={"Haoshoku Haki"} />
          <label >Akuma no mi</label><Field type="checkbox" name='power' value={"Akuma no mi"} />

          <br />
          <Field name="type" component="select">
            <option value="Kaizoku">Kaizoku</option>
            <option value="Marine">Marine</option>
            <option value="Kakumeigun">Kakumei-gun</option>
          </Field>


          <button type="submit">Submit</button>


        </Form>





        {/*  {({ handleSubmit, handleChange, values }) => (
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
        )} */}



      </Formik>
    </div>
  )
}
