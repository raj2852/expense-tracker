import React,{useContext} from "react";
import { GlobalContext } from "../context/globalState";

const Credit = () =>{
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc,item) => (acc += item), 0); 

    const debit = amounts
    .filter(item => item < 0)
    .reduce((acc,item) => (acc += item), 0)
    .toFixed(2);

    const left =amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);

    return(
        <>
        <div className="tab">
            <text>Credit: {income}</text>
        </div>
        <div className="tab">
            <text>Debit: {Math.abs(debit)}</text>
        </div>
        <div className="tab">
            <text>Left: {Math.abs(left)}</text>
        </div>
        </>
    )
}

export default Credit;