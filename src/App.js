import NavBar from './NavBar';
import Home from './Home';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const person = {
    name: "Ananya",
    age: 21
  };

  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
