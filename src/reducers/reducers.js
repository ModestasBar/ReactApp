const inputReducer = (state = '', action) => {
  switch (action.type) {
    case 'ADD_INPUT':
      return action.payload;
    default:
      return state;
  }
};

const facilityReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_FACILITY':
      return action.payload;
    default:
      return state;
  }
};

const exposureReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_EXPOSURE':
      return action.payload;
    default:
      return state;
  }
};

export {
  inputReducer,
  facilityReducer,
  exposureReducer,
};
