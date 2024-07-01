import { useState,useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../utils/UserConetext"
import { useSelector } from "react-redux"


const Header = () => {

    const [btnName, setBtnName] = useState("Login")

    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems)


    return(
        <div className="flex justify-between  m-0  shadow-lg">
            <div className="flex logo-container ">
                <img className="w-12 h-12 m-3  ml-5 mr-0 rounded-3xl" src="https://cdn.dribbble.com/users/9953/screenshots/1875793/media/66fedec47cf4024bef3f89072f6de587.jpg?resize=400x0" />
                <h1 className="m-3 text-xl ml-3 pt-2  font-extrabold ">TastyBitesDish</h1>
            </div>
            <div className="items-center">
                <ul className="flex p-4 m-3">
                    <li className="px-4 font-bold"> <Link to="/">Home</Link> </li>
                    <li className="px-4 font-bold"> <Link to="/groceries">Groceries</Link></li>
                    <li className="px-4 font-bold"><Link to="/about"> About Us </Link> </li>
                    <li className="px-4 font-bold"> <Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 font-bold"><Link to="/cart">Cart - ({cartItems.length})</Link></li>
                    <button className="login-button font-bold" onClick={() => {btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}}>{btnName}</button>
                    
                </ul>
            </div>
        </div>
    )
}

export default Header