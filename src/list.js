import React from 'react';
import Card from './card';
import './list.css';

function List(props) {
    return <section className="List">
        <header>
            {props.header}
        </header>
        <div className="List-cards">
          {props.cards.map((card) =>
            <Card 
            key={card.id}
            title={card.title}
            content={card.content}
            />
            )}
        </div>
        <button type="button" className="List-add-button">
            + Add Random Card
          </button>
    </section>
}

export default List;