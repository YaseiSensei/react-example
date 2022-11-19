import './App.css'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
/* import SampleApp2 from './sample-project2/SampleApp2'; */
/* import SampleApp1 from './sample-project1/SampleApp1'; */
/* import UseEffectApp from './useEffect/UseEffectApp'; */
/* import EntranceApp from './entrance/EntranceApp'; */
import StateApp from './states/StateApp';
import CssModuleApp from "./css-module/CssModuleApp";
import FetchApp from "./native-fetch/FetchApp";




import UserList from './pages/router/UserList';
import UserDetails from './pages/router/UserDetails';
import Error404 from './pages/router/Error404';





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
          <Route path="/state" element={<StateApp />} />
          <Route path='/fetch' element={<FetchApp />} />
          <Route path='/module' element={<CssModuleApp />} />

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
