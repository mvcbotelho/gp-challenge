import React from 'react';
import produce from 'immer';

export type State = {
  background: string;
  title: string;
};

export type Action = {
  type: string;
  payload: {
    // eslint-disable-next-line
    [key: string]: any;
  };
};

const reducer: React.Reducer<State, Action> = (state, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'SET_BACKGROUND':
        draft.background = action.payload.background;
        break;

      case 'SET_CARROUSEL_ITEM':
        draft.title = action.payload.title;
        draft.background = action.payload.image;
      // no default
    }
  });
};

export default reducer;
