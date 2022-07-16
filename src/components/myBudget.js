import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    
    const [ theBudget, setBudget ] = useState(budget);
    const [ adjust, setAdjust ] = useState(theBudget);
    const [ inputClass, setInputClass ] = useState('budget');
    const [ buttonSave, setButtonSave ] = useState('budget');
    const [ buttonEdit, setButtonEdit ] = useState('btn btn-primary');

    let inputclass = 'form-control';
    const handleEdit = () => {
        setAdjust(true)
        setInputClass('');
        setButtonEdit('budget');
        setButtonSave('btn btn-primary');
    }
    const handleSave = (event) => {
        setInputClass('budget');
        setAdjust(theBudget);
        setButtonEdit('btn btn-primary');
        setButtonSave('budget');

        event.preventDefault();
        dispatch({
            type: 'UPDATE_BUDGET',
            payload: theBudget,
        })
    }

    return (
        <div className='alert alert-secondary'>
            {<span>Budget: ${theBudget && adjust}<input type='text' id='budget' value={theBudget} className={inputClass} onChange={(event) => setBudget(event.target.value)}></input></span>}
            <span style={{ float: 'right'}}><button className={buttonEdit} onClick={handleEdit}>Edit</button></span>
            <span style={{ float: 'right'}}><button className={buttonSave} onClick={handleSave}>Save</button></span>
        </div>
    );
};

export default Budget;