import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalendarEvent } from '../../types';

interface CalendarState {
  events: CalendarEvent[];
  loading: boolean;
  error: string | null;
}

const initialState: CalendarState = {
  events: [],
  loading: false,
  error: null,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<CalendarEvent[]>) => {
      state.events = action.payload;
    },
    addEvent: (state, action: PayloadAction<CalendarEvent>) => {
      state.events.push(action.payload);
    },
    updateEvent: (state, action: PayloadAction<CalendarEvent>) => {
      const index = state.events.findIndex(e => e.id === action.payload.id);
      if (index !== -1) {
        state.events[index] = action.payload;
      }
    },
    deleteEvent: (state, action: PayloadAction<string>) => {
      state.events = state.events.filter(e => e.id !== action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { 
  setEvents, 
  addEvent, 
  updateEvent, 
  deleteEvent, 
  setLoading, 
  setError 
} = calendarSlice.actions;
export default calendarSlice.reducer;
