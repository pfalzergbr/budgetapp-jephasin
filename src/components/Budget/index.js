import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import RemainingBudget from './RemainingBudget';
import SpentBudget from './SpentBudget';
import TotalBudget from './TotalBudget';

// Extracting Budget to one logic component, bundling up the separate fields.
// Bootstrap classes, since part of the actual sub-component styling, are moved into the

const Budget = () => {
  const { state, dispatch } = useContext(AppContext);
  const { expenses, budget } = state;

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const remainingBudget = budget - totalExpenses;

  return (
    <>
      <h1 className="mt-3">Budget Planner</h1>
      <div className="row mt-3">
        <TotalBudget budget={budget} dispatch={dispatch} />
        <RemainingBudget remainingBudget={remainingBudget} />
        <SpentBudget totalExpenses={totalExpenses} />
      </div>
    </>
  );
};

export default Budget;
