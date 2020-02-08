const addInput = (string) => ({
  type: 'ADD_INPUT',
  payload: string,
});

const addFacility = (number) => ({
  type: 'ADD_FACILITY',
  payload: number,
});

const addExposure = (number) => ({
  type: 'ADD_EXPOSURE',
  payload: number,
});


export {
  addInput,
  addFacility,
  addExposure,
};
