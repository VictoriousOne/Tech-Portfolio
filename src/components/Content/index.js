import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';


function Content(props) {
    const { currentMenuItem } = props;
    const Component = currentMenuItem.component;

    
    if (Component === "About") {
        return (
            <section><About/></section>
        );
    }
    else if (Component === "Portfolio") {
        return (
            <section><Portfolio/></section>
        );
    }
    else if (Component === "Contact") {
        return (
            <section><Contact/></section>
        );
    }
    else if (Component === "Resume") {
        return (
            <section><Resume/></section>
        );
    }


/*
    return (
        <section>
            {Component}
        </section>
    );
    */
}
export default Content;