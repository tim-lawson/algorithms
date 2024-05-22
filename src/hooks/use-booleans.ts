import { useLocalState } from "@/hooks/use-local-state";

export function useBooleans(key: string, defaultValue: boolean) {
  const [values, setValues] = useLocalState(key, {} as Record<string, boolean>);

  const get = (id: string) => {
    return values[id] ?? defaultValue;
  };

  const toggle = (id: string) => {
    setValues((prev) => {
      return { ...prev, [id]: !get(id) };
    });
  };

  return {
    values,
    get,
    toggle,
  };
}

export type Booleans = ReturnType<typeof useBooleans>;

export function useBoolean(
  id: string,
  booleans: Booleans,
): [boolean, () => void] {
  const value = booleans.get(id);

  const toggle = () => booleans.toggle(id);

  return [value, toggle];
}
