import React, { useState } from 'react'
// import { Recipes } from '../assets/Data'

function NestedList() {

  const [key,setKey] = useState(null);

  console.log(typeof(key) +" "+ key)

  const Recipes = [{
      id: 'greek-salad',
      name: 'Greek Salad',
      ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
    }, {
      id: 'hawaiian-pizza',
      name: 'Hawaiian Pizza',
      ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
    }, {
      id: 'hummus',
      name: 'Hummus',
      ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
    }];

  return (
    <div>
      <h3 onClick={()=>setKey(1)}>Nested List Items</h3>
      <ul>
        {Recipes.map((item, index) =>
          <li key={index}>
            {item.name}
            <ul>
              {item.ingredients.map((itm,idx) =>
                <li key={idx}>{idx +' '+itm}</li>
            )}
            </ul>
          </li>)}
      </ul>
    </div>
  )
}

export default NestedList



