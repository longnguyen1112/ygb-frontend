import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Signin from "./components/signin/signin";
import Singup from "./components/signin/signup";
import About from "./components/about/about";
import Admin from "./components/admin/Admin";
import ViewAllTrainers from "./trainer_page/ViewAllTrainers";

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
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/admin/trainers" element={<ViewAllTrainers/>}/>
        </Routes> 
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
