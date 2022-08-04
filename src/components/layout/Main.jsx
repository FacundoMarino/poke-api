import React from "react";


const Main = ({ children, classes}) => {

    return(

        <main className={`main ${classes || "" } `}>{ children }</main>
    )

}

export default Main;