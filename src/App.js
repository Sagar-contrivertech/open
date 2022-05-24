// import logo from './logo.svg';
import React, {useLayoutEffect} from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
// import About from './pages/About';
import Posp from './pages/Posp';
import Product from './pages/Product';

function App() {
  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 
  return (
    <>
    {/* <div className='container' > */}
      <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posp" element={<Posp />} />
          <Route path="/product" element={<Product />} />


        </Routes>
        </Wrapper>
      </BrowserRouter>
    {/* </div> */}
    </>
  );
}

export default App;
