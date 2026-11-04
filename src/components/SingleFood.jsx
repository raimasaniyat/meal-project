
const SingleFood = ({food}) => {
    console.log(food)
    return (
        <div>
            <img src={food.strMealThumb} alt=""/>
            <h1>{food.strMeal}</h1>
        </div>
    );
};

export default SingleFood;