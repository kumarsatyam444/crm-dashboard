import { configureStore } from '@reduxjs/toolkit';
import customerSlice from './slices/customerSlice';
import calendarSlice from './slices/calendarSlice';
import taskSlice from './slices/taskSlice';
import themeSlice from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    customers: customerSlice,
    calendar: calendarSlice,
    tasks: taskSlice,
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
