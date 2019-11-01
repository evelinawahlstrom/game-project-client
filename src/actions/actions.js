import {url} from '../constants'
import request from 'superagent'

export const ADD_SYMBOL = 'ADD_SYMBOL'
export const START_AGAIN = 'START_AGAIN'


const addSymbol = (row, column, symbol) => ({
    type: 'ADD_SYMBOL',
    symbol,
    row,
    column
  });
  
  const startAgain = () => ({
    type: 'START_AGAIN'
  });
  

  // export const loadGame = () => (dispatch, getState) => {
  //   console.log("Hi", getState())
  //   if (getState().game.length !== 0) 
  //   return
  //   // a GET /TEAMS request
  //   request(`${url}/game/:id`)
  //     .then(res => {
  //       // dispatch an TEAMS_FETCHED action that contains the TEAMS
  //       dispatch(startAgain(res.body))
  //     })
  //     .catch(console.error)
  // }
  