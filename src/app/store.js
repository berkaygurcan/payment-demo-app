import { configureStore } from "@reduxjs/toolkit";

import packagesSlice from "../features/counter/packagesSlice";
import paymentSlice from "../features/counter/paymentSlice";
import  userSlice  from "../features/counter/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    payments: paymentSlice,
    packages: packagesSlice,
  },
});
