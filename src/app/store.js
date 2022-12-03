import {configureStore} from '@reduxjs/toolkit';
import productReducer from './productSlice';
import logger from 'redux-logger'

// создаем магазина
export const store = configureStore({
  reducer: {
    product: productReducer,
  },
  // логируем действия над чартом используя middleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
