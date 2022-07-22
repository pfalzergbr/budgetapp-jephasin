import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
// import { AppContext } from '../context/AppContext';

const SpentBudget = () => {
  const { expenses } = useContext(AppContext);

  const spentBudget = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  return (
    <div className="col-sm">
      <div className="alert alert-primary">
        <span>Spent: ${spentBudget}</span>
      </div>
    </div>
  );
};

export default SpentBudget;
