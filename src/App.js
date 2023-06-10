
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from './Layout/Navigation';
import Home from './Page/Home';
import AddBookDetails from './User/AddBookDetails';
import { BrowserRouter as Router,Routes,Route }from "react-router-dom"
import EditBookDetails from './User/EditBookDetails';
import ViewUserDetails from './User/ViewUserDetails';
import LoginForm from './sigin';
import SignUpForm from './signup';
import ParallaxFlippingCards from './cards';
import HeroSection from './cards';

function App() {
  return (
    <div className="App">
     
<Router>
     <Routes>
      <Route exact path="/" element={<LoginForm/>}/>
      <Route exact path="/cards" element={<HeroSection/>}/>

      <Route exact path="/signup" element = {<SignUpForm/>}/>
      <Route exact path="/fetchBooks" element={<Home/>}/>
  <Route exact path="/saveBooks" element={<AddBookDetails/>}/>
  <Route exact path="/updateBooks" element={<EditBookDetails/>}/>
 <Route exact path="/getBooks/:bookno" element={<ViewUserDetails/>}/>
     </Routes>
      
     
  </Router>
     
     
    
     </div>
  );
}

export default App;
