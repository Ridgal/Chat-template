import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../interface/user';
import { getUsers } from './actions';


type userStateProps = {
  users: IUser[],
  loading: boolean,
  error: null,
};

const initialState: userStateProps = {
  users: [],
  loading: false,
  error: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.loading = true;
      })
  }
})

export default userSlice.reducer;