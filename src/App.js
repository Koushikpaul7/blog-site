import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Home/Navbar';
import { Route, Routes } from 'react-router-dom';
import Categories from './components/Home/Categories';
import Footer from './components/Home/Footer';
import DetailsPage from './components/Home/DetailsPage';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}>
          </Route>
          <Route path='/categories' element={<Categories></Categories>}></Route>
          <Route path='/details' element={<DetailsPage/>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
