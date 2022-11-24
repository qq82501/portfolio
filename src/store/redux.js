import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  deviceMode: window.innerWidth < 900 ? "mobile" : "pc",
  nav: [
    { name: "Home", to: "#section-hero" },
    { name: "About", to: "#section-about" },
    { name: "Work", to: "#section-work" },
  ],
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case "SET_DEVICE_MODE": {
      return { ...state, deviceMode: action.payload };
    }
    default:
      return initialState;
  }
};

const store = configureStore({ reducer: reducer });

export default store;
