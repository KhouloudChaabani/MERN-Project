import './App.css';
import { Routes, Route } from'react-router-dom';
import Ho from './components/Ho';
import ErrorPage from './components/ErrorPage';
import Update from './components/Update';
import Log from './components/log';
import Reg from './components/reg';

import View from './components/View';
import Pay from './components/Pay';
import Video from './components/Video';
import Home from './pages/home/Home';
import Add from './pages/Add/Add';
import One from './pages/one/One';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'

function App() {

  const [userName, setUserName] = useState("")
  const [user, setUser] = useState(null)

  return (  
    
    <div className="App">
    <Navbar user={user}/>
      <Routes>
      <Route element={<Log setUserName={setUserName} setUser={setUser}/>} path="/log" />
      <Route element={<Reg setUserName={setUserName} setUser={setUser}/>} path="/reg" />
      <Route element={<Ho user={user} userName={userName}/>} path="/movies" />

        <Route element={<ErrorPage />} path="/unautorized" />
        <Route path='/'element={ <Home user={user}/>}/>
        <Route element={<Pay userName={userName}  />} path="/pay/:id" />
        <Route element={<Video />} path="/video/:link" />

        <Route element={<Add user={user} userName={userName}  />} path="/movies/new" />
        <Route element={<Update userName={userName} />} path="/movies/:id/review"/>
        <Route element={<View  userName={userName}/>} path="/movies/:id"/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
