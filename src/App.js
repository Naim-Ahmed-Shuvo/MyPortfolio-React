import { Container } from "@material-ui/core";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav.jsx";
import Skill from "./components/Skill";
import Contact from './components/Contact';

function App() {
  return (
    <body style={{
      margin:0,
      padding:0
    }}>
        <Nav />
        <Header />
        <Skill />
        <Contact/>
    </body>
  );
}

export default App;
