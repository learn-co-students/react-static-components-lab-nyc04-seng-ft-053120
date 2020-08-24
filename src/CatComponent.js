import React, { Component } from 'react';
// import GraceHopperQuoteComponent from './GraceHopperQuoteComponent'

export default class CatComponent extends Component {
  render() {
    return (
      <div className="bar" id="cat">
        <GraceHopperQuoteComponent />
        <img src="/cat.gif" />
      </div>
    );
  }
}
