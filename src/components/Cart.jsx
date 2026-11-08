

const Cart = ({cart}) => {
    console.log(cart)
    return (
        <div>
            {cart.map(c=> <h1>{c.strMeal}</h1>)}
        </div>
    );
};

export default Cart;