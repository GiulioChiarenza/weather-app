import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Main from './component/Main';
import Details from './component/Details';
import { Container } from 'react-bootstrap';


function App() {
  return (
<BrowserRouter>
  <>
<NavBar/>
  <Container>
<Routes>
  <Route element={<Main></Main>} path='/'/>
  <Route element={<Details></Details>} path='/Details'/>
  </Routes>
  </Container>
<Footer/>
</>
</BrowserRouter>
  );
}

export default App;
