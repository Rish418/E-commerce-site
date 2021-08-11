import React from 'react';
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./stateProvider";
function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='header'>
            <Link to="/">
                <img
                className="header_logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>
            <div className="header_search">
                <input className="header_searchIn" type="text"/>
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav ">
                <div className="header_option">
                    <span className="header_optionlineone">Hello Guest</span>
                    <span className="header_optionlinetwo">Sign In</span>
                </div>
                <div className="header_option">
                    <span className="header_optionlineone">Returns</span>
                    <span className="header_optionlinetwo">& orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionlineone">your</span>
                    <span className="header_optionlinetwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header_optionlineone header_basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
        
        

    )
}

export default Header

