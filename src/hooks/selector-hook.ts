import { useAppSelector } from "./redux-hooks";

const useSelectorHook = () => {
  const users = useAppSelector((state) => Array.from(state.users.users));
  const loading = useAppSelector((state) => state.users.loading);

  return { users, loading };
};

export { useSelectorHook };