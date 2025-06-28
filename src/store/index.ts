import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './slices/themeSlice';
import customerSlice from './slices/customerSlice';
import taskSlice from './slices/taskSlice';
import calendarSlice from './slices/calendarSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    customers: customerSlice,
    tasks: taskSlice,
    calendar: calendarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
