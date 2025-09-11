import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/index.js'; 
import loginHistoryReducer from './recent-login/index.js';
import otpReducer from './otp/index.js'

const rootReducer = combineReducers({
  auth: authReducer,
  loginHistory:loginHistoryReducer,
  otp: otpReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
