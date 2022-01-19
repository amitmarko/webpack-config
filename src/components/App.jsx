import React from 'react';
import Recipes from './Reciepes';
import '../styles/index.scss';

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <h1>Hi React!</h1>
        <Recipes />
      </main>
    </>
  );
};

export default App;
