import React, { createContext, useReducer, useContext } from 'react';

import background from 'assets/images/bbb19-tiago-leifert.jpg';

import reducer, { State, Action } from './reducer';
import data from './data';

export type Context = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const initialState: State = {
  background,
  title: data[0].data[0].title,
};

// eslint-disable-next-line
// @ts-ignore
const context: React.Context<Context> = createContext();
const { Provider } = context;

export const useStore = (): Context => useContext(context);

const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default StoreProvider;
