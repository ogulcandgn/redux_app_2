import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  data: false,
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.open = true;
      state.data = action.payload.data;
    },
    closeModal: (state, action) => {
      state.open = false;
      state.data = false;
    },
  },
});

export default modal.reducer;
export const { openModal, closeModal } = modal.actions;
