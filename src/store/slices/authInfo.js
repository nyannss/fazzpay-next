import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id_user: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    assignAuth: (prevState, action) => {
      const { id, token } = action.payload;
      return {
        ...prevState,
        id_user: id,
        token: token,
      };
    },
    dismissAuth: (prevState) => {
      return {
        ...initialState,
      };
    },
  },
});
export const authAction = authSlice.actions;
export default authSlice.reducer;
