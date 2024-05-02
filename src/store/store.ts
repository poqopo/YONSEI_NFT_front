import { configureStore, createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: {
    address: '',
  },
  reducers: {
    setAddress(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.address = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    user: user.reducer,
  },
});

export default store;
export const { setAddress } = user.actions;
