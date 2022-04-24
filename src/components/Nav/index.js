import React from 'react';

function Nav(props) {

    const {
        menuItems = [],
        setCurrentMenuItem,
        currentMenuItem
    } = props;

    function menuItemSelected(item) {
        console.log(`${item} selected`)
    }

    return (
        <header className="flex-row px-1 space-between">
            <h2><a href="/">Kerry A. Long, Sr.</a></h2>
            <nav>
                <ul className="flex-row">
                    {menuItems.map((item) => (
                        <li
                        className={`mx-1 ${currentMenuItem.name === item.name && `navActive`
                        }`}
                            key={item.name}
                        >
                            <span onClick={() => setCurrentMenuItem(item)}>
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
