import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/myBudget';
import Remainder from './components/Remainder';
import './App.css';
import TotalExpenditure from './components/Expenditure';
import ExpList from './components/expenditureList';
import AddExp from './components/ExpForm';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
       <div className="container">
     <h1 className='mt-3'>
       Budget Planner
     </h1>
     <div className='row mt-3'>
       <div className='col-sm'>
         <Budget />
       </div>
       <div className='col-sm'>
         <Remainder />
       </div>
       <div className='col-sm'>
         <TotalExpenditure />
       </div>
       <h3 className='mt-3'>Expenses</h3>
     </div>
     <div className='row mt-3'>
       <div className='col-sm'>
         <ExpList />
       </div>
     </div>
     <h3 className='mt-3'>Add Expense</h3>
     <div className='mt-3'>
       <div className='col-sm'>
         <AddExp />
       </div>
     </div>
    </div>
    </AppProvider>
   
  );
}

export default App;
