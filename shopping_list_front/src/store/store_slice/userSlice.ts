import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserDto } from "../reducer_dtos/UserDto";
import { SliceDto } from "../reducer_dtos/SliceDto";
import { updateHelper } from "../helpers";



export const userSlice = createSlice({
  name: "user",
  initialState: {} as SliceDto<UserDto>,
  reducers: {
    setUser: (state, action: PayloadAction<SliceDto<UserDto>>) => {
      if (!state) { state = {} };
      if (!action.payload) { state = undefined; return; }
      updateHelper(state, action.payload);
    },
  },
});

export const { setUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export const userReducer = userSlice.reducer;