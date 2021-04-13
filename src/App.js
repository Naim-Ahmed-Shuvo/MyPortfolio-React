import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';

import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Container>
        <Nav/>
        <Header/>
      </Container>
     
    </div>
  );
}

export default App;
