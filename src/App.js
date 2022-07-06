import './App.css';
import Home from './views/Home';
import Skills from "./views/Skills";
import Portfolio from "./views/Portfolio";
import pandapic from './assets/pandapic.jpg';
import Footer from './views/Footer';

function App() {
  return (
    <>
      <Home/>
      <div className="panda-container"><img className="panda" src={pandapic} alt="Panda" /></div>
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
