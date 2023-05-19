import logo from './logo.svg';
import './App.css';
import Jokes from "./components/jokes/jokes";
import Header from "./components/Header/header";

function App() {
  return (
    <div className="App">
        <Header />
     <Jokes/>
    </div>
  );
}

export default App;
