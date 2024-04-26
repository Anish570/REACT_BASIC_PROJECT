import { configureStore, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import privacyReducer from "./Privacy";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counterNumber: 0,
  },
  reducers: {
    increment: (state) => {
      state.counterNumber++;
    },
    decrement: (state) => {
      state.counterNumber--;
    },
    customadd: (state, action) => {
      state.counterNumber += action.payload.value;
    },
    customsub: (state, action) => {
      state.counterNumber -= action.payload.value;
    },
  },
});

export const { increment, decrement, customadd, customsub } =
  counterSlice.actions;

const counterstore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacyReducer,
  },
});

export default counterstore;

// import { createStore } from "redux";

// const Initial_value = {
//   number: 5,
// };

// const counterReducer = (store = Initial_value, action) => {
//   let newStore = store;
//   console.log("Action Received :", action);
//   if (action.type === "add") {
//     newStore = { number: store.number + 1 };
//   } else if (action.type === "minus") {
//     newStore = { number: store.number - 1 };
//   } else if (action.type === "customadd") {
//     newStore = { number: store.number + Number(action.payload.value) };
//   } else if (action.type === "customsub") {
//     newStore = { number: store.number - Number(action.payload.value) };
//   } else {
//     console.log("nothing recieved in reducer");
//   }

//   return newStore;
// };
