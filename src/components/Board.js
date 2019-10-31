import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BlankSymbol from './BlankSymbol';
import XSymbol from './XSymbol';
import OSymbol from './OSymbol';
import { X, O } from '../symbols/symbols';
import { addSymbol, startAgain } from '../actions/actions';
import { connect } from 'react-redux';

class Board extends Component {
  addSymbol (rowIndex, column, symbol) {
    !this.props.won && this.props.addSymbol(rowIndex, column, symbol);
  }

  getSymbol(rowIndex, column, symbol) {
    if (symbol === X) {
      return <XSymbol key={column} column={column} />;
    }
    if (symbol === O) {
      return <OSymbol key={column} column={column} />;
    }
    return <BlankSymbol key={column} addSymbol={this.addSymbol.bind(this, rowIndex, column)} turn={this.props.turn} />;
  }

  render() {
    const wonClass   = this.props.won ? ` won-${this.props.wonLine}` : '';
    const drawClass  = this.props.draw ? ' draw' : '';
    const boardClass = 'board' + wonClass + drawClass;
    console.log('boardclass', boardClass)
   console.log(this.props.board)
    if (!this.props.board) {
        return null
    }
    
    return (
      <div className={boardClass}>
        {
          Object.keys(this.props.board)
            .map(rowIndex => {
               
              return (
                <div className={`row row${rowIndex}`} key={rowIndex}>
                  {
                    this.props.board[rowIndex].map((symbol, positon) => {
                      return this.getSymbol(rowIndex, positon, symbol);
                    })
                  }
                </div>
              );
            })
        }
        {
          this.props.won || this.props.draw ?
          <p className="startAgain" onClick={this.props.startAgain}>
            Click to start again!
          </p> : false
        }
      </div>
    );
  }
}

Board.propTypes = {
  board: PropTypes.object.isRequired,
  turn: PropTypes.string.isRequired,
  won: PropTypes.string,
  draw: PropTypes.bool.isRequired,
  wonLine: PropTypes.string,
  addSymbol: PropTypes.func.isRequired,
  startAgain: PropTypes.func.isRequired
};

export default connect(
  ({board, turn, won, draw, wonLine}) => ({
    board, turn, won, draw, wonLine
  }),
  (dispatch) => {
    return {
      addSymbol (rowIndex, column, symbol) {
        dispatch(addSymbol(rowIndex, column, symbol));
      },
      startAgain () {
        dispatch(startAgain());
      }
    };
  }
)(Board);

export {Board as PureBoard};
