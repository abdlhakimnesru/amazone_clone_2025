import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
import classes from "./Header.module.css"

const LowerHeader = () => {
  return (
    <div className={classes.lower_container}>
        <ul>
            <li>
              <IoMenuSharp />
              <p>All</p></li>
            <li>Today's Deals</li>
            <li>Customer Service</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>
       </ul>  

    </div>
  )
}

export default LowerHeader