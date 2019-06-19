import React from 'react'
import header from"../images/header.jpg";

class Header extends React.Component
{
    render()
    {
        return(
            <div className="header vc hc"style={{backgroundImage:`url('${require('../images/header.jpg')}')`}}>
                <h1 style={{color:"white",fontSize:"10vmin"}}>
                    Jack Strosahl
                </h1>
            </div>
        );
    }
}

export default Header;