import { use } from "react";

const FoodSection = ({foodDataRes}) => {

    const data = use(foodDataRes)
    const foods = data.meals
    console.log(foods)
    return (
        <div>
            {
                foods.map(food => <h1>{food.strMeal}</h1>)
            }
        </div>
    );
};

export default FoodSection;