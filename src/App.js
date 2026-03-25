
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';
import Notfound from './components/Notfound';


function App() {
  return (
    <Router>
      <div className="App">
      <header>
        <nav className="custom-nav">
        <div className="nav-left">
        <Link to="/"><div className="nav-logo">The Cozy Knot</div></Link>
      </div>

<div className="nav-right">
  <Link to="/signin" className="nav-link">Sign in</Link>
  <Link to="/signup" className="nav-link">Register</Link>
  <Link to="/addproducts" className="nav-link">Add products</Link>
</div>

    </nav>
        
      </header>
      <Routes>
        <Route path='/' element={<Getproducts />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/addproducts' element={<Addproducts />} />
        <Route path='/makepayment' element={<Makepayment />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      
    </div>
    </Router>

    

    
  );
}

export default App;
// Changes
