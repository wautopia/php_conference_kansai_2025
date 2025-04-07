import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './pages/home';
import './main.css';

export function Main() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </>
    </BrowserRouter>

  );
}
