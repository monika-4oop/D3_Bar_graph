import './App.css';
import { Routes, Route } from 'react-router-dom'

import {Register} from './Components/Register'
import { D3BarChart } from './Components/D3BarChart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Register />}>
          {' '}
        </Route>

        <Route exact path="/barchart" element={<D3BarChart />}>
          {' '}
        </Route>

      </Routes>

    </div>
  );
}

export default App;
