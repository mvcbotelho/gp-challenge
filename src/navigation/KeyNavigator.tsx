import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react';

export type KeyActions = {
  up?: () => void;
  down?: () => void;
  left?: () => void;
  right?: () => void;
};

interface Context {
  context: string;
  setContext: React.Dispatch<React.SetStateAction<string>>;
  setKeys: (newKeyActions: KeyActions) => void;
}

interface KeyNavigatorProps {
  initialContext: string;
}

// eslint-disable-next-line
// @ts-ignore
const context: React.Context<Context> = createContext();
const { Provider } = context;

export const useKeyNavigator = (): Context => useContext(context);

export const KeyNavigator: React.FC<KeyNavigatorProps> = ({
  children,
  initialContext,
}) => {
  const [keyActionsContext, setKeyActionsContext] = useState(initialContext);
  const keyActions = useRef<KeyActions>({});
  function setKeyActions(newKeyActions: KeyActions): void {
    keyActions.current = newKeyActions;
  }

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const { up, down, left, right } = keyActions.current;

    switch (e.keyCode) {
      case 37:
        e.preventDefault();
        if (left) left();
        break;
      case 38:
        e.preventDefault();
        if (up) up();
        break;
      case 39:
        e.preventDefault();
        if (right) right();
        break;
      case 40:
        e.preventDefault();
        if (down) down();
        break;
      // no default
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return (): void => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <Provider
      value={{
        context: keyActionsContext,
        setContext: setKeyActionsContext,
        setKeys: setKeyActions,
      }}
    >
      {children}
    </Provider>
  );
};

export default KeyNavigator;
