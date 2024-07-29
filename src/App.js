import Contact from './components/Contact';
import { Demos } from './components/Demos';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Demos/>
      <Contact/>
    </div>
  );
}

export default App;
