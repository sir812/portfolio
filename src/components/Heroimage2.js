import React, { Component } from 'react';
import "./HeroStyles2.css";
import ProgressiveImage from './ProgressiveImage';

class Heroimage2 extends Component {
  render() {
    return (
     <div className="heroimage2">
      {this.props.bgImage && (
        <ProgressiveImage
          src={this.props.bgImage}
          srcSet={this.props.bgSrcSet}
          sizes={this.props.bgSizes}
          className="heroimage2__background"
          alt=""
          fetchPriority="high"
          loading="eager"
          decoding="async"
          style={{ width: '100%', height: '100%' }}
        />
      )}
      <div className="heading">
        <h1>{this.props.heading || "Hi"}</h1>
        <p>{this.props.text || "Welcome"}</p>
      </div>
    </div>
    );
  }
}
export default Heroimage2;









