/* eslint-disable no-console */
import React from 'react';
import './app.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addInput, addFacility, addExposure } from './actions';


const App = () => {
  const dispatch = useDispatch();

  const answer = useSelector((rootState) => {
    const { facility, exposure } = rootState;
    return facility * exposure;
  });

  const inputReducer = useSelector((rootState) => rootState.input);

  const localAddress = 'http://localhost:8000';
  const toJson = (data) => data.json();

  const handleRequest = (inputVal = 'name') => {
    try {
      fetch(`${localAddress}/person/${inputVal}`)
        .then((data) => toJson(data))
        .then((name) => {
          fetch(`${localAddress}/facility/${name.person1}`)
            .then((facilityData) => toJson(facilityData))
            .then((facilityNum) => {
              dispatch(addFacility(facilityNum.facility2));
              fetch(`${localAddress}/exposure/${facilityNum.facility2}`)
                .then((expsoseData) => toJson(expsoseData))
                .then((exposureNum) => (
                  dispatch(addExposure(exposureNum.exposure))
                ));
            });
        });
    } catch {
      console.log('Error!');
    }
  };

  return (
    <div>
      <h1>
        {`Result ${answer}`}
      </h1>
      <input
        type="text"
        placeholder="Enter correct value --> 'name'"
        onChange={(e) => dispatch(addInput(e.target.value))}
      />
      <input
        type="button"
        value="Continue"
        onClick={() => handleRequest()}
        disabled={inputReducer !== 'name' || false}
      />
    </div>
  );
};

export default App;
