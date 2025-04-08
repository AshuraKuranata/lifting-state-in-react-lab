import { useState } from 'react'
import './App.css'
import IngredientList from './components/IngredientList/IngredientList.jsx';
import BurgerStack from './components/BurgerStack/BurgerStack.jsx';

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const [stack, setStack] = useState([])

  const addToBurger = (addBurgerStack) => {
    setStack([...stack, addBurgerStack])
  }

  const removeBurger = (removeBurgerStack) => {
    const targetIngredient = removeBurgerStack.name
    setStack([...stack.filter(removeBurgerStack => removeBurgerStack.name !== targetIngredient)])
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList addIngredient={addToBurger} ingredients={availableIngredients}/>
        <BurgerStack burger={stack} removeIngredient={removeBurger}/>
      </section>
    </main>
  );
};

export default App;


/*
User stories:

As a user, I want to be able to see a list of the ingredients that can be added to my burger on the left side of the screen.

As a user, I want to be able to see a stack of the ingredients that make up my burger on the right side of the screen.

As a user, I want to click a ‘+’ button on an ingredient to add it to my burger stack.
This action will place the ingredient on the stack displayed on the right side of the screen, while keeping the original ingredient list on the left unchanged.

As a user, I want to click an ‘X’ button on an ingredient in my burger stack to remove it.
This will take the ingredient off the stack on the right side of the screen, without changing the ingredient list on the left.
*/