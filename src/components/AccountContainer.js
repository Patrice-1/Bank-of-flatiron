import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
      setFilteredTransactions(data);
  });
 }, []);

 const handleAddTransaction = (newTransaction) => {
  fetch("http://localhost:8001/transactions",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTransaction),
  })
   .then(response => response.json())
   .then(data => {
     setTransactions([...transactions, data]);
     setFilteredTransactions([...transactions, data]);
   });
  };

  const handleSearch = (searchTerm) => {
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };
  return (
    <div>
      <Search onSearch={handleSearch} />
      <AddTransactionForm onAddTransaction={handleAddTransaction}/>
      <TransactionsList transactions={filteredTransactions}/>
    </div>
  );
}

export default AccountContainer;
