import "./App.css";
import { Link } from "./router/link";
import { Router } from "./router/router";
import { Route } from "./router/route";

const Home: React.FC = () => {
  return <h1>Home Page</h1>;
};

const About: React.FC = () => {
  return <h1>About Page</h1>;
};

function App() {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Router>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    </>
  );
}

export default App;
