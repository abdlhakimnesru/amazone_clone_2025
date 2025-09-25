import React from 'react'
import classes from './Header.module.css'
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
     <section>      
        <div className={classes.header_container}>
            {/* logo section */}
        <div className={classes.logo_container}>

            <Link to="/">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"/>
                 </Link>

            <div className={classes.delivery}>
                <span>
                <SlLocationPin size={24} color="#1a1a1a" />
                </span>
                <div>
                    <p>Deliver to</p>
                     <span>Ethiopia</span>
                </div>
           </div>
          </div>       
                      
                  {/* search section */}
            <div className={classes.search}>
                    <select name="" id="">
                    <option value="">All</option>
                    </select>
                    <input type="text" />
                    <BsSearch size={24} color="#1a1a1a" />
            </div>


                {/* other section */}
            <div className={classes.order_container}>
                
                <Link to="" className={classes.language}>
                    <img
                       src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
                       alt="US Flag"
                      />
                    <select name="" id="">
                        <option value="">EN</option>
                    </select>
                </Link>

                <Link to="/auth">
                    <p>Sign In</p>
                    <span>Account & Lists</span>
                </Link>

                <Link to="/Orders"  className={classes}>
                    <p>returns</p>
                    <span>& Orders</span>
                </Link>

                <Link to="/cart">
                    <BiCart size={30} color="orange" />         
                    <span>0</span>
                </Link>
          </div>
        </div>
        

    
     </section>
     <LowerHeader />
    </>
  )
}

export default  Header




