
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import UpdateUser from './components/UpdateUser';
import UserView from './components/UserView';
import AddUser from './components/AddUser';

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='/' element={<UserView/>}/>
              <Route path='/create' element={<AddUser/>}/>
              <Route path='/edit' element={<UpdateUser/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
