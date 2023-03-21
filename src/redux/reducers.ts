import { combineReducers } from "redux";
import chatSlice from "./chat/chatSlice";
import userSlice from "./user/userSlice";

const reducer = combineReducers({
  users: userSlice,
  chat: chatSlice,
});

export type RootState = ReturnType<typeof reducer>
export default reducer;