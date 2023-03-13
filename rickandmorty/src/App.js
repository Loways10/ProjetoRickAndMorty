import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './template/header/Header';
import Footer from './template/footer/Footer';

import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Characters from './pages/characters/Characters';
import Character from './pages/character/Character';
import Episodes from './pages/episodes/Episodes';
import Locations from './pages/locations/Locations';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes >
        <Route path='/' element={<Home /> } />
        <Route path='/search/:search' element={<Search /> } />
        <Route path='/characters' element={<Characters /> } />
        <Route path='/character/:id' element={<Character /> } />
        <Route path='/locations' element={<Locations /> } />
        <Route path='/episodes' element={<Episodes /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
