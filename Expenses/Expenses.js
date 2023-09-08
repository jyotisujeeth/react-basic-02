import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";

import Expens
import Card from "../UI/Card";
import "./Expenses.css";


const Expenses = (props) => {
  const [filterdYear, setFilterdyear] = useState('2020');

   const filterChangeHandler = (selectedYear) => {
    setFilterdyear(selectedYear);
  };

 const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterdYear;
 });
  
 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterdYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  )};

export default Expenses;


// import React, { useState } from 'react';

// import Card from '../UI/Card';
// import ExpensesFilter from './ExpensesFilter';
// import ExpensesList from './ExpensesList';
// import ExpensesChart from './ExpensesChart';
// import './Expenses.css';

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState('2020');

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   const filteredExpenses = props.items.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

//   return (
//     <div>
//       <Card className='expenses'>
//         <ExpensesFilter
//           selected={filteredYear}
//           onChangeFilter={filterChangeHandler}
//         />
//         <ExpensesChart expenses={filteredExpenses} />
//         <ExpensesList items={filteredExpenses} />
//       </Card>
//     </div>
//   );
// };

// export default Expenses;