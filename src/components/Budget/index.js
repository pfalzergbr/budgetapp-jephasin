import RemainingBudget from './RemainingBudget';
import SpentBudget from './SpentBudget';
import TotalBudget from './TotalBudget';

// Extracting Budget to one logic component, bundling up the separate fields.
// Bootstrap classes, since part of the actual sub-component styling, are moved into the

const Budget = () => {
  return (
    <>
      <h1 className="mt-3">Budget Planner</h1>
      <div className="row mt-3">
        <TotalBudget />
        <RemainingBudget />
        <SpentBudget />
      </div>
    </>
  );
};

export default Budget;
