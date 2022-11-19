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
/* import Entrance from './entrance/Entrance'; */
import State from './pages/states/State';
import CssModule from "./pages/css-module/CssModule";
import Fetch from "./pages/native-fetch/Fetch";




import UserList from './pages/router/UserList';
import UserDetails from './pages/router/UserDetails';
import Error404 from './pages/router/Error404';
import State from './pages/states/State';





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
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/module">About</NavLink>
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
        </ul>
      </nav>
      <div className="App">



        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/state" element={<State />} />
          <Route path='/fetch' element={<Fetch />} />
          <Route path='/module' element={<CssModule />} />

          {/* Error404 */}
          <Route path='*' element={<Error404 />} />

          
          {/*  Nesting v6  with <Outlet /> */}
          <Route path='/users' element={<UserList />} >
            <Route path=':id' element={<UserDetails />} />
          </Route>

        </Routes>
      </div>
    </Router>


  );
}
function Home() {
  return <h2>Home</h2>;
}



export default App;
