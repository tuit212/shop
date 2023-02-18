import "./App.scss"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Routes ,  Route} from 'react-router-dom'
import Corusel from "./components/Main/Corusel/Corusel";


function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
        <Route path="/Corusel" element={<Corusel/>}/>
        <Route path="/Hero" element={ <Header/>}/>
        <Route path="/Main" element={<Footer/>}/>
    </Routes>
      <Footer/>
    </div>
  );
}

export default App;
