import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuid } from 'uuid';

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState('');
  const [theCost, setTheCost] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuid(),
      name: name,
      theCost: parseInt(theCost),
    };
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
    setName('');
    setTheCost('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="col-sm">
        <div className="col-sm">
          <label form="name">Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <label form="cost">Cost</label>
          <input
            required
            type="text"
            className="form-control"
            id="cost"
            value={theCost}
            onChange={(event) => setTheCost(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
