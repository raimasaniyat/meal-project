import image from '../assets/logo.png'
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <img src={image} alt="logo" />
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Order</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Career</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Nav;