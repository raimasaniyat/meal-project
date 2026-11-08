

const SingleFood = ({food, addToCart}) => {
    console.log(food)
    return (
        <div className="single-food">
            <img src={food.strMealThumb} alt=""/>
            <h1>{food.strMeal}</h1>
            <button onClick= {()=> addToCart(food)}>Add to cart</button>
        </div>
    );
};

export default SingleFood;