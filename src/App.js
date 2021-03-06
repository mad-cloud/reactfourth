import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Link} from 'react-router-dom';
import Home from './components/Home';
import Students from './components/Students';
import Contact from './components/Contact';
import './style.css';
let App=()=>{
  return(
    <div className='main_div'>
    <BrowserRouter>
    <nav>
    <Link className='navlinks' to='/home'>Home</Link>
    <Link className='navlinks' to='/students'>Students</Link>
    <Link className='navlinks' to='/contact'>Contact</Link>
    </nav>
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/students' element={<Students />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;
