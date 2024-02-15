import logo from './logo.svg';
import './App.css';
import NavEvent from './components/NavEvent';
import AddEvent from './components/AddEvent';
import ViewEvent from './components/ViewEvent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<NavEvent/>} />
        <Route path='/add' element = {<AddEvent/>} />
        <Route path='/view' element = {<ViewEvent/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
