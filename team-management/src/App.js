import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Add from "./add/add";
import Edit from "./edit/edit";
import Home from './home/home';
function App() {
  return (
    <Router>
      <Routes>     
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/add" element={<Add />}/>
        <Route path="/edit" element={<Edit />}/>
      </Routes>
    </Router>
  );
}

export default App;
