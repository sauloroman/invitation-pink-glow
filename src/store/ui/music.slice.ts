import { createSlice } from '@reduxjs/toolkit';

interface MusicState {
  isPlaying: boolean;
}

const initialState: MusicState = {
  isPlaying: false,
};

export const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    playMusic: (state) => {
      state.isPlaying = true;
    },
    pauseMusic: (state) => {
      state.isPlaying = false;
    },
    toggleMusic: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const { playMusic, pauseMusic, toggleMusic } = musicSlice.actions;
export default musicSlice.reducer;
