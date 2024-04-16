import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { openModal } from "../modal/modalSlice";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (message, thunkAPI) => {
    try {
      // Option to pass parameters from wherever these functions are invoked
      // console.log(message);
      // thunkAPI allows accessing all of the state/store values across the app, from within other slices.
      // console.log(thunkAPI.getState());
      // thunkAPI allows dispatching actions to the reducers of other slices.
      // thunkAPI.dispatch(openModal());
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      // Ability to customize error messages with thunkAPI. Mess up the URL to trigger an error and see the output.
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, { payload }) => {
      // payload is an item ID
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
    },
    increase: (state, { payload }) => {
      // payload is an item ID
      const selectedItem = state.cartItems.find((item) => item.id === payload);
      selectedItem.amount++;
    },
    decrease: (state, { payload }) => {
      // payload is an item ID
      const selectedItem = state.cartItems.find((item) => item.id === payload);
      selectedItem.amount--;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.price * item.amount;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
