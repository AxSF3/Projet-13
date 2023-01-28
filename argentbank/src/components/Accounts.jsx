import React from "react";
import DATA_ACCOUNTS from "../services/__mocks__/accounts";
import Account from "./Account";

function Accounts() {
  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {DATA_ACCOUNTS.map((dataAccounts) => {
        return (
          <Account
            key={dataAccounts.id}
            singleAccountid={dataAccounts.id}
            title={dataAccounts.title}
            money={dataAccounts.money}
            balanceType={dataAccounts.balanceType}
          />
        );
      })}
    </>
  );
}

export default Accounts;
