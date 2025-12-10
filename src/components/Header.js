import { Link } from "react-router";

// import ResImg from "./assets/resimg.jpg"
export const Header = ()=>{
    return(
        <div className="header-container">
            <div className="logo">
                <img src = "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Swiggy_logo_%28old%29.svg/1024px-Swiggy_logo_%28old%29.svg.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li> Home </li> 
                    <Link to = "/about"> <li> About </li> </Link> 
                    <li> Contact </li>
                    <li> Cart </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;