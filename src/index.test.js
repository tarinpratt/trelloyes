import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import Card from './card';

it('renders without crashing', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () =>{
    const section = document.createElement('section');
    ReactDOM.render(<List />, section);
    ReactDOM.unmountComponentAtNode(section);
});