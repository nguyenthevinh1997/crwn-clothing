import SECTIONS_DATA from "redux/shop/sections.data";

const INITIAL_STATE = {
  sections: SECTIONS_DATA
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
