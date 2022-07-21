import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TotalBudget from './components/TotalBudget';
import Remainder from './components/Remainder';
import './App.css';
import TotalExpenditure from './components/TotalExpenditure';
import ExpList from './components/ExpenditureList';
import AddExp from './components/AddExpenseForm';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <TotalBudget />
          </div>
          <div className="col-sm">
            <Remainder />
          </div>
          <div className="col-sm">
            <TotalExpenditure />
          </div>
          <h3 className="mt-3">Expenses</h3>
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="mt-3">
          <div className="col-sm">
            <AddExp />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
