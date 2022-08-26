import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <AllRoutes></AllRoutes>
     {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
