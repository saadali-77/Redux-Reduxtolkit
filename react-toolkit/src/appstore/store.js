import { configureStore } from "@reduxjs/toolkit";
import { cakeReducer } from "./features/cakeSlice";
import { userReducer } from "./features/userSlice";
import reduxLogger from "redux-logger";

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export default store;