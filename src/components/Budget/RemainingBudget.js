
const RemainingBudget = ({ remainingBudget}) => {
  const alertType = remainingBudget < 0 ? 'alert-success' : 'alert-danger';

  return (
    <div className="col-sm">
      <div
        className={`alert ${alertType}`}
        style={{ display: 'flex', height: '72px', alignItems: 'center' }}
      >
        <span>Remaining: ${remainingBudget}</span>
      </div>
    </div>
  );
};

export default RemainingBudget;
