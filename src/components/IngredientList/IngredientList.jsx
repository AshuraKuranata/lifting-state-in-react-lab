const IngredientList = (props) => {
    
    const handleAddIngredient = (ingredient) => {
        props.addIngredient(ingredient)
      }
    
    return (
    <>
    <h3>Ingredients</h3>
    <ul>
        {props.ingredients.map((ingredient, index) => {
        return( <li style={{backgroundColor: ingredient.color}} key={index}>{ingredient.name} <button onClick={() => handleAddIngredient(ingredient)}>Add</button></li>)
        })}
    </ul>
    
    </>

    )
}

export default IngredientList;