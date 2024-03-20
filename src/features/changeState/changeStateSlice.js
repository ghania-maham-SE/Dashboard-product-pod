import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarShow: true,
};

const changeStateSlice = createSlice({
  name: 'changeState',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      return { ...state, sidebarShow: !state.sidebarShow };
    },
  },
});

export const { toggleSidebar } = changeStateSlice.actions;
export default changeStateSlice.reducer;
