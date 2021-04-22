import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import { Container } from '@material-ui/core';
import Skill from './components/Skill';

function App() {
  return (
    <div className="App">
      <Container>
        <Nav/>
        <Header/>
        <Skill/>
      </Container>
     
    </div>
  );
}

export default App;
