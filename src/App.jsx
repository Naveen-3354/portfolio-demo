import './App.scss';
import Navbar from './pages/Navbar/Navbar';
import About from './pages/about/About';
import Hero from './pages/hero/Hero';
import Learning from './pages/learning1/learning';
import Projects from './pages/projects/Projects';
import { New } from './pages/carosel/New'
import { Scroll } from './pages/scroll/Scroll';

function App() {
  return (
    <div className="App">
     {/* <Navbar />
      <Hero />
      

      <About />

      <Learning /> 
       <Projects/>
      <New/> 
      */}
      <Scroll/> 
    </div>
  );
}

export default App;
