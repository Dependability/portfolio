import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import './styles/style.css';;

function App() {
  return (
    <BrowserRouter basename='portfolio'>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/projects' element={<Projects />}></Route>
        <Route path='/*' element={<div>Don't know what you are talking about...</div>}></Route>
        {/* <Route path='/resume' element={<Home />}></Route> */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;
