import { useState } from 'react';

const elvenShildRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoostone: 4,
};

const newobject = {
  ...elvenShildRecipe,
  amit: 100,
};

console.log(elvenShildRecipe);
console.log(newobject);

const Recipes = () => {
  const [recipe, setRecipe] = useState({});
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(elvenShildRecipe)}>
        elvenShildRecipe Recipe
      </button>
      <button onClick={() => setRecipe(newobject)}>newobject Recipe</button>

      <ul>
        {Object.keys(recipe).map((m) => (
          <li key={m}>
            {m}: {recipe[m]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
