import { createSlice } from "@reduxjs/toolkit";
import { order as cakeorder } from "./cakeSlice";

const initialState = {
  numberoficecream: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    order: (state) => {
      state.numberoficecream -= 1;
    },
    restock: (state, action) => {
      state.numberoficecream += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(cakeorder, (state) => {
      state.numberoficecream--;
    });
  },
});

export const { order, restock } = icecreamSlice.actions;
export default icecreamSlice.reducer;