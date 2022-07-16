import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExpItem from "./ExpenseItem";

const ExpList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <ul className="list-group">
            {expenses.map((expense) => (
                <ExpItem id={expense.id} name={expense.name} cost={expense.theCost} />
            ))}
        </ul>
    );
};

export default ExpList;