import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserCredential } from "firebase/auth";
import { RootState } from "../store/store";

export interface AuthDto {
  userId: string,
  sessionToken: string,
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: '',
    sessionToken: '',
  } as AuthDto,
  reducers: {
    setUser: (state, action: PayloadAction<AuthDto>) => {
      console.info("Setting user", action.payload);
      (Object.keys(state) as (keyof AuthDto)[]).forEach((key) => {
        if (state[key] !== action.payload[key]) {
          state[key] = action.payload[key];
        }
      })
    },
  },
});

export const { setUser } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export const authReducer = authSlice.reducer;