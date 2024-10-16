import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserCredential } from "firebase/auth";
import { RootState } from "../store/store";

export interface AuthDto {
  userId: string
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: '',
  } as AuthDto,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      console.info("Setting user", action.payload);
      state.userId = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export const authReducer = authSlice.reducer;