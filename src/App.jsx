import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DetailsPage from './components/DetailsPage';
import Navbar from './components/Navbar';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="details" element={<DetailsPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
// https://documenter.getpostman.com/view/10831675/SzYZ1eNY#cb5ec096-a897-49dd-a4a1-e27fe32605df
