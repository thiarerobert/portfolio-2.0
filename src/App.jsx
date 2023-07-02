import './App.css';
import React from 'react';

import Header from './components/Header';
import Profile from './components/Profile';
import Contacts from './pages/Contact';
import Projets from './pages/Projets';
import About from './pages/About';
import Blogs from './pages/Blog';
import Parcours from './pages/Parcours';
import { Route, Routes } from 'react-router-dom';

function App() {
  const menuItems = [
    { id: 1, title: "À propos", path: "/about", element: <About/>},
    { id: 2, title: "Parcours", path: "/parcours", element: <Parcours/>},
    { id: 3, title: "Projets", path: "/projets", element: <Projets/>},
    { id: 4, title: "Blogs", path: "/blogs", element: <Blogs/>},
    { id: 5, title: "Contacts", path: "/contacts", element: <Contacts/>},
  ];

  return (
    <div className="App">
      <div className="profile">
        <Profile/>
      </div>
      <div className='component'>
        <div>
          <Header/>
        </div>
        <Routes>
          {menuItems.map(item => (
            <Route key={item.id} path={item.path} element={item.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
