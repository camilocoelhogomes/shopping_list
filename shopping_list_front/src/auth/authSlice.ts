import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export interface AuthDto {
  userId: string,
  sessionToken: string,
  displayName: string | null,
  email: string | null,
  phoneNumber: string | null,
  photoURL: string | null
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
        if (!action.payload[key] || state[key] === action.payload[key]) return;
        state[key] = action.payload[key];
      })
    },
  },
});

export const { setUser } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export const authReducer = authSlice.reducer;