import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import Card from './card';
import renderer from 'react-test-renderer';


describe('Lists component', ()=> {
it('renders without crashing', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () =>{
    const section = document.createElement('section');
    ReactDOM.render(<List cards={[]} />, section);
    ReactDOM.unmountComponentAtNode(section);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List cards={[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<Card />)
          .toJSON();
        expect(tree).toMatchSnapshot();  
        });
    });