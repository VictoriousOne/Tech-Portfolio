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
            <section><About></About></section>
        );
    }
    else if (Component === "Portfolio") {
        return (
            <section><Portfolio></Portfolio></section>
        );
    }
    else if (Component === "Contact") {
        return (
            <section><Contact></Contact></section>
        );
    }
    else if (Component === "Resume") {
        return (
            <section><Resume></Resume></section>
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