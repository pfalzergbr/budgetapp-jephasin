const SpentBudget = ({ totalExpenses }) => {
  return (
    <div className="col-sm">
      <div
        className="alert alert-primary"
        style={{ display: 'flex', height: '72px', alignItems: 'center' }}
      >
        <span>Spent: ${totalExpenses}</span>
      </div>
    </div>
  );
};

export default SpentBudget;
