import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Delivery from './Delivery';
import Contact from './Contact';


function App() {
  return (
    <div>
      <div className='header'>
        <p>Книжковий магазин КнигоМаркет</p>
      </div>
    <Router>
      <nav className='style-menu'>
        <Link to='/' className='style-link'>Асортимент</Link>
        <Link to='/about' className='style-link'>Про нас</Link>
        <Link to='/shop' className='style-link'>Магазин</Link>
        <Link to='/delivery' className='style-link'>Доставка і оплата</Link>
        <Link to='/contact' className='style-link'>Контакти</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/delivery' element={<Delivery/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
