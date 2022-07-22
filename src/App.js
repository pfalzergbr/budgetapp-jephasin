import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpensesList from './components/ExpensesList';
import ExpenseForm from './components/ExpenseForm';

function App() {
  return (
    <AppProvider>
      <div className="container">
        <Budget />
        <ExpensesList />
        <ExpenseForm />
      </div>
    </AppProvider>
  );
}

export default App;
