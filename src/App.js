import "./App.css";
import './css/style.css';
import FilmPage from "./pages/FilmPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className='wrap'>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/film/:id' element={<FilmPage />}/>
        </Routes>
      </div>
  );
}

export default App;
