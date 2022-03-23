import React, { useContext, useState } from "react";
import App from "./App.css";
import { TransactionContext } from "./transContext";


function Child() {
    let { transactions, addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);


    const handleAddition = (event) => {
        event.preventDefault();
        if (Number(newAmount) === 0) {
            alert("Please enter correct value");
        return false;
        }
    
    addTransaction({
        amount: Number(newAmount),
        desc: newDesc
    });

    setDesc('');
    setAmount(0)
    }

    const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
        if (transactions[i].amount > 0)
            income = income + transactions[i].amount
    }
    
    return income;
    }

    const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
        if (transactions[i].amount < 0)
            expense += transactions[i].amount
    }
    return expense;
    }
    return (
        <div className="maincontainer">
        <h1 className= "centerAllign colorwhite">Expense Tracker</h1>

        <h3 className= "colorwhite">
            Your Balance <br /> {getIncome() + getExpense()}$
        </h3>

        <div className="IncomeExpense">
        <h3 className= "color1">
          INCOME <br /> ${getIncome()}
        </h3>
        <h3 className= "color2">
          EXPENSE <br /> {getExpense()}$
        </h3>
      </div>
      <h3 className= "colorwhite">History</h3>
      <hr />

      <ul className="transaction-list">
        {transactions.map((transObj, ind) => {
          return (<li key={ind}>
            <span>{transObj.desc}</span>
            <span>${transObj.amount}</span>
          </li>
          )
        })}
      </ul>
      <h3 className= "colorwhite"> Add new transaction</h3>
      <hr />

      <form className="transaction-form" onSubmit={handleAddition}>
        <label className= "colorwhite">
          Enter your description <br />
          <input type="text"
            value={newDesc}
            placeholder="Description"
            onChange={(ev) => setDesc(ev.target.value)}
            required />
        </label>
        <br /> <br />
        <label className= "colorwhite">
          Enter Amount <br />
          <input type="number"
            value={newAmount}
            placeholder="Amount"
            onChange={(ev) => setAmount(ev.target.value)}
            required />        </label>
        <br /> <br />

        <input className="btn" type="submit" value="Add Transaction" />      </form>
    </div>
  );
}

export default Child;