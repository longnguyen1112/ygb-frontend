import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Signin from "./components/signin/signin";
import Singup from "./components/signin/signup";
import About from "./components/about/about";
import Admin from "./components/admin/Admin";
import ViewAllTrainers from "./trainer_page/ViewAllTrainers";
import AddTrainer from "./trainer_page/AddTrainer"
import UpdateTrainer from "./trainer_page/UpdateTrainer"
import ViewTrainer from "./trainer_page/ViewTrainer"

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
          <Route path="/admin/add" element={<AddTrainer/>}/>
          <Route path="/admin/update/:id" element={<UpdateTrainer/>}/>
          <Route path="/admin/view/:id" element={<ViewTrainer/>}/>
        </Routes> 
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
