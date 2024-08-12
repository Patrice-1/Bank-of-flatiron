import React from "react";
import Transaction from "./Transaction";

function TransactionsList() {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {sortedTransactions.map(transaction => (
          <Transaction
            key={transaction.id}
            id={transaction.id}
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            amount={transaction.amount}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
