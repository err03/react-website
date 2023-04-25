import React from "react";
import coverImage from "../assets/img/cover-image.png";
import { Link } from "react-router-dom";

export class Card extends React.Component {
    constructor(props) {
      super(props)
      this.state = {...props}
    }

    render() {
      return (
        <div className="card ml-auto" style={{ width: "18rem" }}>
          <img src={coverImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.state.title}</h5>
            <p className="card-text">
              {this.state.description}
            </p>
            <Link 
              to={"/project/"+this.state.title} 
              state={{infos: this.state}}
              className="ms-auto btn btn-primary stretched-link" 
              style={{ color: "#ffffff", decorationStyle:"none" }} 
            >
              View
            </Link>
          </div>
        </div>
      );
    }
}
