import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props){
    

    return (
        <Card className="expense-item">
      <ExpenseDate dat={props.date} />
      <div className="expense-item__descripton">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
    );
}

export default ExpenseItem;