import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Route, Link } from "react-router-dom";
import Square from './Square'

class BoardContainer extends Component {
  render() {
    return (
      <div id="root">
        <div data-reactroot className="sc-bwzfXH cmvIBw">
          <div>
            <p>It's Player 1's turn</p>
          </div>
          <div className="board">
            <div className="row row0">
              <div className="sc-bdVaJa jwsmpu"></div>
              <div className="sc-bdVaJa jwsmpu"></div>
              <div className="sc-bdVaJa jwsmpu"></div>
            </div>
            <div className="row row1">
              <div className="sc-bdVaJa jwsmpu"></div>
              <div className="sc-bdVaJa jwsmpu"></div>
              <div className="sc-bdVaJa jwsmpu"></div>
            </div>
            <div className="row row2">
              <div className="sc-bdVaJa jwsmpu"></div>
              <div className="sc-bdVaJa jwsmpu"></div>
              <div className="sc-bdVaJa jwsmpu"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth
  };
};

export default connect(mapStateToProps)(BoardContainer);
// step 1 make elements
//add cc 
//make a component for evry square (cell)
//cell  has a oc make req to back use id for cell auth 
//steal img or make css that circle or cross

//stream the board  and then render it. 



