import React from "react";
import classes from "./TopBar.module.css"
const TopBar =() =>{
    return(
        <header>
        <nav className={classes.Topbar}>
          <img src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578"
            alt="Amazon Logo" />
        </nav>
      </header>
    )
}
export default TopBar;