import { createStore } from "redux";

const Initial_value = {
  number: 5,
};

const counterReducer = (store = Initial_value, action) => {
  let newStore = store;
  console.log("Action Received :", action);
  if (action.type === "add") {
    newStore = { number: store.number + 1 };
  } else if (action.type === "minus") {
    newStore = { number: store.number - 1 };
  } else if (action.type === "customadd") {
    newStore = { number: store.number + Number(action.payload.value) };
  } else if (action.type === "customsub") {
    newStore = { number: store.number - Number(action.payload.value) };
  } else {
    console.log("nothing recieved in reducer");
  }

  return newStore;
};

const counterstore = createStore(counterReducer);

export default counterstore;
