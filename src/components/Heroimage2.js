import "./HeroStyles2.css";

import React, { Component } from 'react';

class Heroimage2 extends Component {
  render() {
    const heroBackground = this.props.bgImage
      ? {
          backgroundImage: `linear-gradient(135deg, rgba(11,18,32,0.82) 0%, rgba(23,32,51,0.68) 60%, rgba(11,18,32,0.82) 100%), url(${this.props.bgImage})`,
        }
      : undefined;

    return (
     <div className="heroimage2" style={heroBackground}>
      <div className="heading">
        <h1>{this.props.heading || "Hi"}</h1>
        <p>{this.props.text || "Welcome"}</p>
      </div>
    </div>
    );
  }
}
export default Heroimage2;









