const IngredientList = (props) => {
    
    const handleAddIngredient = (event) => {
        props.addIngredient()
      }
    
    return (
    <>
    <h3>Ingredients</h3>
    <ul>
        {props.ingredients.map((ingredient, index) => {
        return( <li style={{backgroundColor: ingredient.color}} key={index}>{ingredient.name}</li>)
        })}
    </ul>
    </>

    )
}

export default IngredientList;