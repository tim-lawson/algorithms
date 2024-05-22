import React from "react";

const IS_CLIENT = typeof window !== "undefined";

export const useLocalState = <S>(
  key: string,
  initialState: S,
): [S, React.Dispatch<React.SetStateAction<S>>, () => void] => {
  const [state, setState] = React.useState<S>(initialState);

  const initialize = () => {
    if (!IS_CLIENT) {
      return initialState;
    }
    const item = window.localStorage.getItem(key);
    try {
      return item ? JSON.parse(item) : initialState;
    } catch (error) {
      return initialState;
    }
  };

  // prevent hydration error
  React.useEffect(() => {
    setState(initialize());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prev = React.useRef(state);
  prev.current = state;

  const setLocalState = React.useCallback(
    (action: React.SetStateAction<S>) => {
      const isFunction = (x: unknown): x is (prev: S) => S =>
        typeof x === "function";
      const next = isFunction(action) ? action(prev.current) : action;
      if (IS_CLIENT) {
        window.localStorage.setItem(key, JSON.stringify(next));
      }
      setState(next);
    },
    [key],
  );

  const reset = React.useCallback(() => {
    setState(initialState);
    if (IS_CLIENT) {
      window.localStorage.removeItem(key);
    }
  }, [initialState, key]);

  return [state, setLocalState, reset];
};
