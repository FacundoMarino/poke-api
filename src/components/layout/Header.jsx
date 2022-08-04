import React from "react";
import  logo  from "../../assets/img/logo.png"

const Header = () => {

    return (

        <header className="header">
            <img className="logo" src={logo} alt="logo pokemon"  />
        </header>
    )
}

export default Header;