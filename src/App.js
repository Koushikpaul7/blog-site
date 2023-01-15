import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Categories from './components/Category/Categories';
import Footer from './components/Footer/Footer';
import DetailsPage from './components/Details/DetailsPage';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect, useLayoutEffect } from 'react';



function App() {
  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }
  useEffect(()=>{
    AOS.init({once: true});

  },[])
  return (
    <div>
     <Wrapper>
     <Navbar />
        <Routes >
          <Route path='/' element={<Home></Home>}>
          
          </Route>
          <Route path='/categories' element={<Categories></Categories>}></Route>
          <Route path='/details' element={<DetailsPage/>}></Route>
        </Routes>
        <Footer></Footer>
     </Wrapper>
    </div>
  );
}

export default App;
