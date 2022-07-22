import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../../context/AppContext';

const ExpenseItem = ({ name, cost, id }) => {
  const { dispatch } = useContext(AppContext);

  const onDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXP',
      payload: id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span>{cost}</span>
        <TiDelete size="1.5em" onClick={onDeleteExpense}></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
