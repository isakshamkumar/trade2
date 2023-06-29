// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import StockScreener from './StockScreener';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import StockScreener from './StockScreener';
import { LandingPageStocks } from './components/LandingPageStocks';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Link} from "react-router-dom";

function App() {
  return (
    <Router>
    {/* <Navbar /> */}
    <Routes>
      <Route path='/' element={<LandingPageStocks/>}/>
      <Route path='/stocks' element={<StockScreener/>}/>
      
    </Routes>
  </Router>
  );
}

export default App;
