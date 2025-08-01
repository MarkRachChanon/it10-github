import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CardDetail from './components/CardDetail';

const App = () => {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
        <Header />

        <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route path='/collection' element={} />
          <Route path='/about' element={} /> */}
          <Route path='*' element={<NotFound/>} />
          <Route path='/card/:id' element={<CardDetail/>} />
        </Routes>

        <Footer />
        </div>
      </Router>
    </>
  )
}

export default App