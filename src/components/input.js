import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/globalState";

const InputArea = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const add = e => {
    e.preventDefault();
    const newTransaction = {
        id: Math.floor(Math.random()*100000000),
        text,
        amount: +amount,
    }
    addTransaction(newTransaction);
    setAmount("");
    setText("");
  }

  return (
    <form onSubmit={add}>
    <div className="input">
        
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Expense detail"
        style={{ width: "60%" }}
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Expense amount"
        style={{ width: "30%" }}
      />
      <input type="submit" style={{backgroundColor:"green"}}/>
        
      
    </div>
    </form>
  );
};

export default InputArea;
