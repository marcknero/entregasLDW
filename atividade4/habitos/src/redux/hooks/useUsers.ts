import { useDispatch, useSelector } from "react-redux";
import type { AppDispetch, RootState } from "../store";
import { addUser as addUserAction, removeUser as removeUserAction } from "../slices/userSlice";
import type { User } from "../slices/userSlice";

export function useUsers() {
  const dispatch = useDispatch<AppDispetch>();
  const users = useSelector((state: RootState) => state.users.users);

  const getUsers = () => users;

  const addUser = (user: User) => {
    dispatch(addUserAction(user));
  };

  const removeUser = (id: number) => {
    dispatch(removeUserAction(id));
  };

  return {
    getUsers,
    addUser,
    removeUser,
  };
}
