import { Container } from "@material-ui/core";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav.jsx";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="App">
      <Container>
        <Nav />
        <Header />
        <Skill />
      </Container>
    </div>
  );
}

export default App;
