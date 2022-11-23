import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Signin from "./components/signin/signin";
import Singup from "./components/signin/signup";
import About from "./components/about/about";
import trainee_header from "./trainee_page/trainee_header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Singup/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes> 
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
