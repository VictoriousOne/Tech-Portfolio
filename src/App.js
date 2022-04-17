
import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Content from './components/Content';



function App() {

  const [menuItems] = useState([
    { name: "About Me", component: "About", description: "Short bio" },
    { name: "Portfolio", component: "Portfolio", description: "Applications in portfolio" },
    { name: "Contact Me", component: "Contact", description: "Contact form" },
    { name: "Resume", component: "Resume", description: " Skills list" }
  ]);

  const [currentMenuItem, setCurrentMenuItem] = useState(menuItems[0]);

  return (
    <div>
      <Nav
        menuItems={menuItems}
        setCurrentMenuItem={setCurrentMenuItem}
        currentMenuItem={currentMenuItem}
        >
      </Nav>
      <main>
         
        <Content currentMenuItem={currentMenuItem}></Content>
        <About></About>
      </main>
    </div>
  );
}

export default App;