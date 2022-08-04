import React from "react";
import coin from "../../assets/img/coin.png"
import FavoriteWidget from "../ui/FavoriteWidget";


const Navbar = () => {

    return(

        <nav className="nav">
           <div className="power">
                <a className="btn btn-circle" href="">Power</a>
                <a className="btn btn-circle btn-image" href="" >
                    <img className="coin" src={coin} alt="coin pokemon" />
                </a>
           </div>
           <a className="btn btn-circle" href="">
           <FavoriteWidget />
           </a>

             
        </nav>

    )
}

export default Navbar;