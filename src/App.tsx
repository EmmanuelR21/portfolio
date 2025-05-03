import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Route from "./routing/Route";
import Routes from "./routing/Routes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<h1>Projects</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </>
  );
}

export default App;
