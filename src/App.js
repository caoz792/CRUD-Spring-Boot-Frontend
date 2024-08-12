import logo from './logo.svg';
import './App.css';
import ListCampistasComponenet from './components/ListCampistasComponenet';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCampistaComponent from './components/AddCampistaComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent/>
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<ListCampistasComponenet/>}></Route>
            <Route  path='/campistas' element={<ListCampistasComponenet/>}></Route>
            <Route  path='/add-campista' element={<AddCampistaComponent/>}></Route>
            <Route  path='/edit-campista/:id' element={<AddCampistaComponent/>}></Route>
          </Routes>
        </div>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
