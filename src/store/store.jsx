import { configureStore } from "@reduxjs/toolkit";
import { customersApi } from "../services/customersApi";

export const store = configureStore({
  reducer: {
    [customersApi.reducerPath]: customersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(customersApi.middleware);
  },
});
