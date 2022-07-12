import { Routes, Route } from 'react-router-dom'
import Album from './Album';
import Home from './Home';
import Navbar from './Navbars';
import Newalbum from './Newalbum';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/album' element={<Album/>} />
        <Route path='/newalbum' element={<Newalbum/>} />
      </Routes>
    </div>
  );
}

export default App;
