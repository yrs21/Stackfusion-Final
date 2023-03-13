import './App.css'
import { Routes, Route } from 'react-router-dom'
import Form from './components/form'
import Submitted from './components/submitted'
import Home from './components/home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route path='/user-form' element={<Form />} />
        <Route path='/submitted' element={<Submitted />} />
      </Routes>
    </div>
  );
}

export default App;
