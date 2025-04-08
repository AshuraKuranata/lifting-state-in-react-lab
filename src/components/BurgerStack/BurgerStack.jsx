const BurgerStack = (props) => {
    return (
        <>
        <h3>Burger</h3>
            {props.burger.length !== 0
            ?
            <ul>
                {props.burger.map((ingredient, index) => {
                    return (<li style={{backgroundColor: ingredient.color}} key={index}>{ingredient.name}</li>)
                })}
            </ul>
            : <h4>No Ingredients, add to burger!</h4>
            }
        </>
    )}

export default BurgerStack