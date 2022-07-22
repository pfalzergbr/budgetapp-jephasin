import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpensesList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ul className="list-group">
            {expenses.map((expense) => (
              <ExpenseItem
                key={expense.id} // look into keys in rendering list for React. React is confused if it doesn't get a key on mapped items.
                id={expense.id}
                name={expense.name}
                cost={expense.cost}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ExpensesList;
