
import styles from'./App.module.css';
import Hero from './componets/Hero/Hero';
import { Navbar } from './componets/Navbar/Navbar';
import About from './componets/About/About';
import Experience from './componets/Experience/Experience';
import Projects from './componets/Projects/Projects';
import Contact from './componets/Contact/Contact';



function App() {

  return (
    
    <div className={styles.App}>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>

    </div>
     
  );
}

export default App;
