import Home from "./Components/Home/Home"
import Projects from "./Components/Projects/Projects"
import Skills from "./Components/Skills/Skills"
import Nav from "./Components/Nav/Nav"
import Contact from "./Components/Contact/Contact"
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      
    </div>
  );
}

export default App;
