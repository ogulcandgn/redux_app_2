import { configureStore } from "@reduxjs/toolkit";

//hangi store'u konfigüre edeceksem onu importluyorum

import todo from "./todo";
import auth from "./auth";
import modal from "./modal";

const store = configureStore({
  reducer: {
    todo,
    auth,
  },
});

export default store;
