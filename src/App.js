import logo from './logo.svg';
import './App.css';
import ProductsList from "./products/productslist";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          FindPrice the new revolution of shopping!
        </h1>
        <ProductsList/>

      </header>
    </div>
  );
}

export default App;
