import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme } from '../../types';

const initialState: Theme = {
  mode: 'light',
  primaryColor: '#3b82f6',
  secondaryColor: '#64748b',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
    },
    setPrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
    },
    setSecondaryColor: (state, action: PayloadAction<string>) => {
      state.secondaryColor = action.payload;
    },
  },
});

export const { toggleTheme, setTheme, setPrimaryColor, setSecondaryColor } = themeSlice.actions;
export default themeSlice.reducer;
