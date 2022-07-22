import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';

const TotalBudget = () => {
  const { budget, dispatch } = useContext(AppContext);

  const [theBudget, setBudget] = useState(budget);
  const [adjust, setAdjust] = useState(theBudget);
  const [inputClass, setInputClass] = useState('display-none');
  const [buttonSave, setButtonSave] = useState('display-none');
  const [buttonEdit, setButtonEdit] = useState('btn btn-primary');

  const handleEdit = () => {
    setAdjust(true);
    setInputClass('');
    setButtonEdit('display-none');
    setButtonSave('btn btn-primary');
  };
  const handleSave = (event) => {
    setInputClass('display-none');
    setAdjust(theBudget);
    setButtonEdit('btn btn-primary');
    setButtonSave('display-none');

    event.preventDefault();
    dispatch({
      type: 'UPDATE_BUDGET',
      payload: theBudget,
    });
  };

  return (
    <div className="col-sm">
    <div className="alert alert-secondary">
      <span>
        Budget: ${theBudget && adjust}
        <input
          type="text"
          value={theBudget}
          className={inputClass}
          onChange={(event) => setBudget(event.target.value)}
        ></input>
      </span>
      <span style={{ float: 'right' }}>
        <button className={buttonEdit} onClick={handleEdit}>
          Edit
        </button>
      </span>
      <span style={{ float: 'right' }}>
        <button className={buttonSave} onClick={handleSave}>
          Save
        </button>
      </span>
    </div>
    </div>
  );
};

export default TotalBudget;
