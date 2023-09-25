import { useState } from "react";

import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses({ expenses, years }) {
  const [chosenYear, setChosenYear] = useState("2020");

  const filteredChangeHandler = (selectedYear) => {
    setChosenYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === chosenYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={chosenYear}
          onChangeFilter={filteredChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
