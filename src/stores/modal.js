import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: false,
  open: false,
  data: false,
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.open = true;
      state.data = action.payload?.data || false;
      state.name = action.payload.name;
    },
    closeModal: (state) => {
      state.open = false;
      state.data = false;
      state.name = false;
    },
  },
});

export const { openModal, closeModal } = modal.actions;
export default modal.reducer;
