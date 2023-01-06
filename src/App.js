import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Home/Navbar';
import { Route, Routes } from 'react-router-dom';
import Categories from './components/Home/Categories';

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}>
          </Route>
          <Route path='/categories' element={<Categories></Categories>}></Route>
        </Routes>
    </div>
  );
}

export default App;
