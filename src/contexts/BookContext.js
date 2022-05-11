import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = ({children}) => {
  const [books, dispatch] = useReducer( bookReducer,[
    //{title: 'name of the wind', author: 'patrick rothfuss', id: 1},
    //{title: 'the final empire', author: 'brandon sanderson', id: 2},
  ]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;