export const addSymbol = (row, column, symbol) => ({
    type: 'ADD_SYMBOL',
    symbol,
    row,
    column
  });
  
  export const startAgain = () => ({
    type: 'START_AGAIN'
  });
  