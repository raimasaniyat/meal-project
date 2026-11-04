import { use } from "react";
import SingleFood from "./SingleFood";

const FoodSection = ({foodDataRes}) => {

    const data = use(foodDataRes)
    const foods = data.meals
    console.log(foods)
    return (
        <div>
            {
                foods.map(food => <SingleFood food = {food} ></SingleFood>)
            }
        </div>
    );
};

export default FoodSection;