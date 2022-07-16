import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remainder = () => {
    const { expenses, budget } = useContext(AppContext);
    const totalExp = expenses.reduce((total, item) => {
        return (total = total + item.theCost);
    }, 0);

    const alertType = totalExp < budget ? 'alert-success' : 'alert-danger';

    return (
        <div className={`alert ${alertType}`}>
            <span>
                Remaining: ${budget - totalExp}
            </span>
        </div>
    )
}

export default Remainder;