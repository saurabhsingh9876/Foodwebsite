import './App.css';
import Navbar from './component/navbar/Navbar';
import Hero from './component/hero/Hero';
import Cart from './pages/cart/Cart';
import store from './context/redux/Store';
import { Routes, Route } from "react-router-dom";
import Category from './pages/category/Category';
import Footer from './component/footer/Footer';
import { useState } from 'react';
import { Provider } from 'react-redux';
import Search from './pages/search/Search';
import { datac } from './component/data/data';

function App() {
  // const [searchQuery, setSearchQuery] = useState('');
  const [query, setQuery] = useState('');
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const debouncedHandleInputChange = debounce((value) => {
    setQuery(value);
  }, 1000); 

  const handleInputChange = (e) => {
    const value = e.target.value;
    debouncedHandleInputChange(value);
  };
  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  // };

  // const handleInputChange = (e) => {
  //   setQuery(e.target.value);
  // }

//  console.log(query)
  return (
    <>
      <Provider store={store}>
      <Navbar query={query} handleInputChange={handleInputChange}  />
      <Routes>
        
        <Route path="/" element={<Hero query={query}/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
      </Provider>
    </>
  );
}

export default App;
