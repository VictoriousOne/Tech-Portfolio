import React from 'react';

function Nav() {

    const menu = [
        { name: "About Me", description: "Short bio"},
        { name: "Portfolio", description: "Applications in portfolio"},
        { name: "Contact Me", description: "Contact form"},
        { name: "Resume", description: " Skills list"}
    ];

    function menuItemSelected(item) {
        console.log(`${item} selected`)
    }

  return (
    <header className="flex-row px-1 space-between">
        <h2><a href="/">Kerry A. Long, Sr.</a></h2>
        <nav>
            <ul className="flex-row">
            {menu.map((item) => (
        <li
          className="mx-1"
          key={item.name}
        >
          <span onClick={() => menuItemSelected(item.name)}>
            {item.name}
          </span>
        </li>
      ))}
            </ul>
        </nav>
    </header>
  );
}

export default Nav;
