import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { v4 as uuid } from 'uuid';
import Input from './Input';

const ExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuid(),
      name: name,
      cost: Number(cost),
    };
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
    setName('');
    setCost('');
  };

  return (
    <>
      <h3 className="mt-3">Add Expense</h3>
      <div className="mt-3">
        <div className="col-sm">
          <form onSubmit={onSubmit}>
            <div className="col-sm">
              <Input
                name="name"
                label="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <Input
                name="cost"
                label="Cost"
                value={cost}
                onChange={(event) => setCost(event.target.value)}
              />
              <div className="col-sm">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ExpenseForm;
