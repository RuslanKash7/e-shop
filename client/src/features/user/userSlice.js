import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/users`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    cart: [],
    favourite: [],
    isLoading: false,
    formType: "signup",
    showForm: false,
  },
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      const found = state.cart.find(({ id }) => id === payload.id);

      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 } // payload.quantity что бы потом можно было не только прибавлять, но и удалять количество
            : item;
        });
      } else newCart.push({ ...payload, quantity: 1 });

      state.cart = newCart;
    },
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
    addItemToFavourite: (state, { payload }) => {
      let newFavourite = [...state.favourite];
      // const found = state.favourite.find(({ id }) => id === payload.id);

      // if (found) {
      //   newCart = newCart.map((item) => {
      //     return item.id === payload.id
      //       ? { ...item, quantity: payload.quantity || item.quantity + 1 } // payload.quantity что бы потом можно было не только прибавлять, но и удалять количество
      //       : item;
      //   });
      // } else newFavourite.push({ ...payload });

      state.favourite = newFavourite;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
  },
});

export const { addItemToCart, toggleForm } = userSlice.actions;

export default userSlice.reducer;
