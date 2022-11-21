import React from "react";
import ErrorPage from "./404";
import "./Nav.css"


class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: true
        };   
    }

    render () {
        if (!this.state.isLoggedIn){ // Don't render shit unless user is logged in
            return (
                <ErrorPage message="Login to access content"/>
            );
        }
        else{
            return (
                <header className="App-Header">
                    <div className="Logo">
                        <img src="https://www.kamerabild.se/sites/kamerabild.se/files/styles/article_image/public/field/image/46994.jpg?itok=genG2ZoV" alt="Clock man"/>
                    </div>
                    <div className="Nav">
                        <ul className="List">
                            <li className="Nav-Item"><button>Recomended</button></li>
                            <li className="Nav-Item"><button>Following</button></li>
                        </ul>
                    </div>
                    <div className="User-Icon">
                        <img src="https://www.kamerabild.se/sites/kamerabild.se/files/styles/article_image/public/field/image/46994.jpg?itok=genG2ZoV" alt="Clock man"/>
                    </div>
                </header>
            );
        };
    }

}



export default Navigation;