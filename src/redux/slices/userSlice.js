import { createSlice } from '@reduxjs/toolkit';
import {signUpWithGoogle} from '../../components/SignInWithGoogle'

const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpWithGoogle.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signUpWithGoogle.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.user = payload;
        state.error = null;
      })
      .addCase(signUpWithGoogle.rejected, (state, { error }) => {
        state.status = 'failed';
        state.error = error.message;
      });
  },
});

export default userSlice.reducer;