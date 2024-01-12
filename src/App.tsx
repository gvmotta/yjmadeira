import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route, 
  Routes,
} from "react-router-dom";
import Index from './pages/index';
import { Sobre } from './pages/sobre';

const App = () => (
  <Router basename='/yjmadeira'>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="sobre" element={<Sobre />} />
    </Routes>
  </Router>
);

export default App;
