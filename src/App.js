import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Home from './pages/home/home';
function App() {
  return (
    <Routes>
      <Route path='' element={<Navigation/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
 