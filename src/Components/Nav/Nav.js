import React from "react";
import ErrorPage from "../ErrorPage/404";
import "./Nav.css"
import search from '../../assets/search-icon.png'
import logo from '../../assets/logo.png'


class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: true
        };    
    }

    render () {
        if (this.state.isLoggedIn === false) {
            return (
                <ErrorPage  message='Login to access content' />
            )
        } else {
            return (
                <header>
                    <div className="Navigation">
                        <div className="Logo">
                            <img src={logo} alt='Logo'/>
                        </div>
                        <div className="Search">
                            <input type="text" placeholder="Search" />
                            <button><img src={search} alt="Search-Button" /></button>
                        </div>
                        <div className="Viewing-Mode">
                            <ul className="Categories">
                                <li><a href=" ">Friends</a></li>
                                <li><a href=" ">Recomended</a></li>
                            </ul>
                        </div>
                        <div className="User-Profile">
                            <img src="https://yt3.ggpht.com/3k9ahcDLssiWiUJXktP7gUGZxSL6JuxuI5SgcEDJUVvoSkvah8IagGg7W6FwbQsBVkeVs4norg=s900-c-k-c0x00ffffff-no-rj" alt="User photo" />
                        </div>
                    </div>
                </header>
            )
        }
    }

}



export default Navigation;