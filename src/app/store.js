import { configureStore } from "@reduxjs/toolkit";

import packagesSlice from "../features/counter/packetsSlice";
import paymentSlice from "../features/counter/paymentSlice";
import  userSlice  from "../features/counter/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    payments: paymentSlice,
    packets: packagesSlice,
  },
});
