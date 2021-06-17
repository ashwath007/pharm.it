
import './App.css';
import Middle from './components/MiddleComponent/Middle';
import Navbar from './components/NavbarComponent/Navbar';
import Partner from './components/PartnerComponent/Partner';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Middle/>
      <Partner/>
    </div>
  );
}

export default App;
