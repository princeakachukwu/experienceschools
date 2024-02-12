
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Body from './Components/Body/Body';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Campuses from './Pages/Campuses/Campuses';
import Staff from './Pages/Staff/Staff';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Blog/Blog';
import Programs from './Pages/Programs/programs';
import Emelogu from './Pages/Emelogu/Emelogu';
import Opobo from './Pages/Opobo/Opobo';
import Egege from './Pages/Egege/Egege';



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Body />}>
          <Route index element = {<Home />} />
          <Route path='About' element = {<About />} />
          <Route path='Campuses' element = {<Campuses />} />
          <Route path='Staff' element = {<Staff />} />
          <Route path='Gallery' element = {<Gallery />} />
          <Route path='Contact' element = {<Contact />} />
          <Route path='Blog' element = {<Blog/>} />
          <Route path='Programs' element = {<Programs/>} />
          <Route path='Emelogu' element = {<Emelogu/>} />
          <Route path='Egege' element = {<Egege/>} />
          <Route path='Opobo' element = {<Opobo/>} />
        </Route>
      </Routes>
      
    </>
  )
}

export default App
