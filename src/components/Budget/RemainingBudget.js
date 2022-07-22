import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const RemainingBudget = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const remainingBudget = budget - totalExpenses;
  const alertType = totalExpenses < budget ? 'alert-success' : 'alert-danger';

  return (
    <div className="col-sm">
      <div className={`alert ${alertType}`}>
        <span>Remaining: ${remainingBudget}</span>
      </div>
    </div>
  );
};

export default RemainingBudget;
