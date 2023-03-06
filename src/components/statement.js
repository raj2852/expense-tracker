import React, { useContext } from "react";
import images from "../images";
import { GlobalContext } from "../context/globalState";

const Statement = () => {
  const { transactions } = useContext(GlobalContext);
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <div>
      {transactions.map((transaction) => (
        <div className="statement">
          <text>
            {transaction.text} : {transaction.amount}
          </text>
          <button
            className="delete"
            onClick={() => deleteTransaction(transaction.id)}
            style={{
              borderWidth: 0,
              borderColor: "transparent",
              backgroundColor: "transparent",
              marginLeft: 10,
            }}
          >
            <img src={images.delete} alt="delete" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Statement;
