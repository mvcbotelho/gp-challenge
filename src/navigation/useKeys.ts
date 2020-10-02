import React, { useState, useEffect } from 'react';
import { useKeyNavigator, KeyActions } from './KeyNavigator';

type UseKeys = (
  keysContext: string,
  actionsSetCreator: KeyActions,
) => {
  focused: boolean;
  setContext: React.Dispatch<React.SetStateAction<string>>;
};

const useKeys: UseKeys = (keysContext, { up, down, left, right }) => {
  const { context, setContext, setKeys } = useKeyNavigator();
  const [focused, setFocused] = useState(context === keysContext);

  useEffect(() => {
    if (context === keysContext) {
      setKeys({ up, down, left, right });
      setFocused(true);
    } else {
      setFocused(false);
    }

    // eslint-disable-next-line
  }, [context, up, down, left, right]);

  return { focused, setContext };
};

export default useKeys;
