import './App.css';
import Home from './pages/Home';
import Rezervaris from './pages/Rezervari';
import { BrowserRouter, Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
<Routes>
  <Route element={<Home/>} path='/' />
  <Route element={<Rezervaris/>} path='/rezervari'/>
  <Route element={<Home/>} path='*'/>
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
