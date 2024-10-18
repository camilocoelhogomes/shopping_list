import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserDto } from "../reducer_dtos/UserDto";

export const userSlice = createSlice({
  name: "user",
  initialState: {
  } as UserDto,
  reducers: {
    setUser: (state, action: PayloadAction<UserDto>) => {
      (Object.keys(action.payload) as (keyof UserDto)[]).forEach((key) => {
        if (!action.payload[key] || state[key] === action.payload[key]) return;
        state[key] = action.payload[key];
      })
    },
  },
});

export const { setUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export const userReducer = userSlice.reducer;