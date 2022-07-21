import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const TotalExpenditure = () => {
  const { expenses } = useContext(AppContext);
  const totalExp = expenses.reduce((total, item) => {
    return (total = total + item.theCost);
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>Spent: ${totalExp}</span>
    </div>
  );
};

export default TotalExpenditure;
