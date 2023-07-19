import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css';
import Card from '../UI/Card';
import '../UI/Card.css';

const ExpenseItem=(props)=> {
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');
  const [amount, setAmount] = useState(props.amount);
  
  const clickhandler=() =>{
   // title='updated!'; lec4
   setTitle('Updated!');
    console.log(title);
  };
  const changeAmountHandler = () => {
    setAmount(100);
  };
 // const deleteHandler = () => { lec3
    // DOM manipulation to delete the expense
    //const expenseItem = document.querySelector('.expense-item');
    //expenseItem.remove();
  //};
  // <button onClick={deleteHandler}>Delete Expense</button> it should be in return
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickhandler}>Change Title</button>
        <button onClick={changeAmountHandler}>Change Amount to $100</button>
       
      </div>
    </Card>
  );
}

export default ExpenseItem;

