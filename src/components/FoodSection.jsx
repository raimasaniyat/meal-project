import { use, useState } from "react";
import SingleFood from "./SingleFood";
import Cart from "./Cart";

const FoodSection = ({foodDataRes}) => {

    const data = use(foodDataRes)
    const foods = data.meals
    console.log(foods)
    const [cart, setCart] = useState([])
    const addToCart = (foodData) => {console.log(foodData)
        setCart([...cart,foodData])
    }
    const handleOrder = () =>{
        setCart([])
        alert("oder successful!")
    }
    return (
        <div className="container-parent">
            <div className="food-container">
            {
                foods.map(food => <SingleFood addToCart={addToCart} food = {food} ></SingleFood>)
            }
            </div>
            <div className="cart-parent">
                <h1>Cart</h1>
                <Cart cart={cart}></Cart>
                <button onClick={handleOrder}>Order</button>
            </div>
        </div>
    );
};

export default FoodSection;