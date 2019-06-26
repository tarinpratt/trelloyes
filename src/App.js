import React from 'react';
import List from './list';
import './app.css';

function App(props) {
  const {store} = props
  return (
    <main className='App'>
      <header>
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {store.lists.map((list) =>
        <List 
        key={list.id}
        header={list.header}
        cards={list.cardIds.map((id) => store.allCards[id])}
        />
          )}
      </div>
    </main>
  );
}

export default App;