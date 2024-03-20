import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name: 'HomeAPI',
  initialState: {
    homeProductApi: []
    // profileValues:[]
  },
  reducers: {
    updateFromHomeApi: (state, action) => {
      state.homeProductApi = action.payload;
    },
  },
});
export const { 
  updateFromHomeApi,  //  updateUserProfile
     } = homeSlice.actions;

export const fetchHomeData = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:400/home/all');
    const data = await response.json();
    dispatch(updateFromHomeApi(data));
  } catch (error) {
    console.error('Error fetching data from API:', error);
  }
};
export const selectHomeData = (state) => state.HomeAPI.homeProductApi;
// export const selectUserProfile = (state) => state.User.profileValues;
export default homeSlice.reducer;