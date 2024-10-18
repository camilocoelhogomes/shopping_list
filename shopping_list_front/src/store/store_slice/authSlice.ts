import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AuthDto } from "../reducer_dtos/AuthDto";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    sessionToken: '',
  } as AuthDto,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthDto>) => {
      (Object.keys(action.payload) as (keyof AuthDto)[]).forEach((key) => {
        if (!action.payload[key] || state[key] === action.payload[key]) return;
        state[key] = action.payload[key];
      })
    },
  },
});

export const { setAuth } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export const authReducer = authSlice.reducer;