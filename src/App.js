import './App.css'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
/* import SampleApp2 from './sample-project2/Sample2'; */
/* import SampleApp1 from './sample-project1/Sample1'; */
/* import UseEffect from './useEffect/UseEffect'; */
import UseState from './pages/useState/UseState';
import CssModule from "./pages/css-module/CssModule";
import Fetch from "./pages/native-fetch/Fetch";




import UserList from './pages/router/UserList';
import UserDetails from './pages/router/UserDetails';
import Error404 from './pages/router/Error404';
import FormikSample from './pages/formik/FormikSample';
import UseFormikSample from './pages/formik/UseFormikSample';
import Register from './pages/formik/Register';
import MemoSample from './pages/react-memo/MemoSample';







function App() {

  let activeStyle = {
    backgroundColor: "pink",
    textDecoration: "none"
  };


  return (


    <Router>

      <nav>
        <ul>
          <li>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/module">Css Module</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/fetch">fetch</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/state">State</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/formik">Formik</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/useformik">UseFormik</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/validation">Validation</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/memo">react memo</NavLink>
          </li>
        </ul>
      </nav>
      <div className="App">



        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/state" element={<UseState />} />
          <Route path='/fetch' element={<Fetch />} />
          <Route path='/module' element={<CssModule />} />

          {/* Error404 */}
          <Route path='*' element={<Error404 />} />

          
          {/*  Nesting v6  with <Outlet /> */}
          <Route path='/users' element={<UserList />} >
            <Route path=':id' element={<UserDetails />} />
          </Route>

          <Route path='/formik' element={<FormikSample/>}></Route>
          <Route path='/useformik' element={<UseFormikSample/>}></Route>
          <Route path='/validation' element={<Register/>}></Route>
          <Route path='/memo' element={<MemoSample/>}></Route>
        </Routes>
      </div>
    </Router>


  );
}
function Home() {
  return <h2>Home</h2>;
}



export default App;
