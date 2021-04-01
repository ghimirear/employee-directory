//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar.js'
//import Form from './components/searchform/searchfrom'
//import Container from './components/container/container'
import Employee from "./components/employeeContainer"

function App() {
  return ( 
      <div>
      <Navbar />
      <Employee />
      </div> 
  );
}

export default App;
