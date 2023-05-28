import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import AgregarLibro from './AgregarLibro';
import ListaLibros from './ListaLibros';
import EditarLibro from './EditarLibro'
import Nav from './Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaLibros/>}/>
          <Route path="/agregar" element={<AgregarLibro/>}/>
          <Route path='/editar/:id'element={<EditarLibro/>}/>
        </Routes>
        </BrowserRouter>         
      </header>
    </div>
  );
}

export default App;
