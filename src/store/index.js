import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authReducer } from "./reducers";
import { usersService } from "./services";

// create root reducer
const rootReducer = {
  auth: authReducer,
  [usersService.reducerPath]: usersService.reducer,
};

// setup store
const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersService.middleware),
});

export default Store;
setupListeners(Store.dispatch);
