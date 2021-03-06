import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './pages/Login';


import 'bootstrap/dist/css/bootstrap.min.css';
import ViewDetails from './pages/ViewDetails';
import AddUser from './pages/AddUser';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/view" element={<ViewDetails />}></Route>
          <Route exact path="/addUser" element={<AddUser />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
