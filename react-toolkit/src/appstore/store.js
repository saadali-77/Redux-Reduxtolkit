import { configureStore } from "@reduxjs/toolkit";
import  cakeReducer  from "./features/cakeSlice";
import  userReducer  from "./features/userSlice";
import { createLogger } from "redux-logger";
import icreamReducer from './features/icecreamSlice'
const logger = createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    user: userReducer,
    icecream:icreamReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export default store;