
import React from "react";
import "./404.css"

class ErrorPage extends React.Component {
    render (){
        return (
            <div className="MessageHeader">
                <h1>404 Error page:</h1>
                <p>{this.props.message}</p>
            </div>
        );
    }
}

export default ErrorPage;
