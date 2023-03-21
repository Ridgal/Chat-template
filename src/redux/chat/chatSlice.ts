import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChats } from "../../interface/chats";
import { getMessage } from "./actions";


type chatStateProps = {
  chats: IChats[],
  loading: boolean,
  error: null
};

const initialState: chatStateProps = {
  chats: [],
  loading: false,
  error: null
};

export const chatSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMessage.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getMessage.fulfilled, (state, action: PayloadAction<IChats[]>) => {
        state.loading = false;
        state.chats = action.payload;
      })
      .addCase(getMessage.rejected, (state) => {
        state.loading = true;
      })
  }
});

export default chatSlice.reducer;