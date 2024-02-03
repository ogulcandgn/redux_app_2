import { configureStore } from "@reduxjs/toolkit";

//hangi store'u konfigüre edeceksem onu importluyorum

import todo from "./todo";

const store = configureStore({
  reducer: {
    todo,
  },
});

export default store;
