import React from "react";
import TransactionLine from "./TransactionLine";
import DATA_ACCOUNTS from "../services/__mocks__/transactions";

function Transactions() {
  return (
    <section className="main bg-light">
      <h2 className="sr-only">transactions list</h2>
      <div className="transactions">
        <div className="transactions-wrapper">
          <div className="transactions-column-title">
            <p className="transactions-column"></p>
            <p className="transactions-column">DATE</p>
            <p className="transactions-column">DESCRIPTION</p>
            <p className="transactions-column">AMOUNT</p>
            <p className="transactions-column">BALANCE</p>
          </div>
          <div>
            {DATA_ACCOUNTS.map(
              ({ id, date, description, amount, balance }) => (
                <TransactionLine
                  key={id}
                  date={date}
                  description={description}
                  amount={amount}
                  balance={balance}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Transactions;
