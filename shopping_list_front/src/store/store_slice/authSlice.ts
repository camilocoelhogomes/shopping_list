import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AuthDto } from "../reducer_dtos/AuthDto";
import { SliceDto } from "../reducer_dtos/SliceDto";


export const authSlice = createSlice({
  name: "auth",
  initialState: {} as SliceDto<AuthDto>,
  reducers: {
    setAuth: (state, action: PayloadAction<SliceDto<AuthDto>>) => {
      if (!state) { state = {} };
      if (!action.payload) { state = undefined; return; }
      (Object.keys(action.payload) as (keyof AuthDto)[]).forEach((key) => {
        if (!action.payload![key] || state[key] === action.payload![key]) return;
        state[key] = action.payload![key];
      })
    },
  },
});

export const { setAuth } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export const authReducer = authSlice.reducer;