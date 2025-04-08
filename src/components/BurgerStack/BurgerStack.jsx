const BurgerStack = (props) => {
    const handleRemoveIngredient = (ingredient) => {
        props.removeIngredient(ingredient)
    }
    
    return (
        <>
        <h3>Burger</h3>
            {props.burger.length !== 0
            ?
            <ul>
                {props.burger.map((ingredient, index) => {
                    return <li style={{backgroundColor: ingredient.color}} key={index}>{ingredient.name}<button onClick={() => handleRemoveIngredient(ingredient)}>Remove</button></li>
                })}
            </ul>
            : <h4>No Ingredients, add to burger!</h4>
            }
        </>
    )}

export default BurgerStack