
import './App.css';
import { Routes, Route } from "react-router-dom";

import Demo from './pages/demoApp';

import DemoReview from './pages/demo-review';

function App() {
  return <Routes>

    <Route exact path="/" element={<Demo />} >   </Route>
    <Route exact path="/demo-review" element={<DemoReview />} >

      
    </Route>

  </Routes>



}

export default App;
