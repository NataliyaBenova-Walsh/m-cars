
import './App.css';
import { Header } from './header/Header';
import {Footer} from './Footer';
import {Home} from './home/Home';
import {Cars} from './cars/Cars';

function App() {
  return (
    <div className="App">
      <Header />

      <Home />

      <Cars />

      <Footer/>
    </div>
  );
}

export default App;
