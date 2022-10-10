import logo from './logo.svg';
import {useContext} from "react";
import { welcomeContext } from './index';
import './App.css';
import Nav from './Nav';

function App() {
 const welcomeMessage = useContext(welcomeContext);
  return (
   <Nav msg={welcomeMessage}/>
  );
}

export default App;
