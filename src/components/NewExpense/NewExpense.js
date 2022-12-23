import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisEditing(false);
  };
  const [isEditing, setisEditing] = useState(false);
  const startEditingHandler = () => {
    setisEditing(true);
  };
  const stopEditingHandler = () => {
    setisEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="submit" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
