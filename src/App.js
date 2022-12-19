import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<Home />}></Route>
        <Route exact path='/projects' element={<Home />}></Route>
        <Route path='/*' element={<div>Don't know what you are talking about...</div>}></Route>
        {/* <Route path='/resume' element={<Home />}></Route> */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;
