import React, { useState } from 'react';

const TotalBudget = ({ budget, dispatch }) => {
  const [updatedBudget, setUpdatedBudget] = useState(budget);
  const [isEditing, setIsEditing] = useState(false);

  const onEdit = () => {
    setIsEditing(true);
  };

  const onSave = (event) => {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_BUDGET',
      payload: updatedBudget,
    });

    setIsEditing(false);
  };

  return (
    <div className="col-sm">
      <div
        className="alert alert-secondary"
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <span>Budget: $</span>
        {isEditing ? (
          <input
            type="number"
            value={updatedBudget}
            onChange={(event) => setUpdatedBudget(event.target.value)}
            style={{
              display: 'inline-block',
              // marginRight: 'auto',
              flex: 1,
              marginRight: '0.5rem',
              border: 'none',
            }}
          ></input>
        ) : (
          <span
            style={{
              display: 'inline-block',
              marginRight: 'auto',
              width: '48px',
            }}
          >
            {updatedBudget}
          </span>
        )}
        {isEditing ? (
          <button className="btn btn-primary" onClick={onSave}>
            Save
          </button>
        ) : (
          <button className="btn btn-primary" onClick={onEdit}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default TotalBudget;
