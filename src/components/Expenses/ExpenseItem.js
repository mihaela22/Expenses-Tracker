import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // seperate states for each component instance
  // on change only that specific instance will be re-evaluated
  // const [title, setTitle] = useState(props.title); // props.title - default value
  // const clickHandler = () => {
  //   setTitle("Updated!");
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change title</button>  */}
    </Card>
  );
};

export default ExpenseItem;
