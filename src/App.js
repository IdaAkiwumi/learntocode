import logo from './logo.svg';
import errorIcon from "./images/icon-error.svg";
import './App.css';

var fName= document.querySelector('.fname');
var buttonClick = document.querySelector ('#btn');
var formText = document.querySelector('.subtext');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>


          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>

    <img src={errorIcon}/>



    </main>


    </div>
  );
}


 function throwMsg(){
       return alert( 'Hello' + fName + '!');
    
        }
     
buttonClick.addEventListener("click", throwMsg);


export default App;
