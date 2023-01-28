import React from "react";
import HeaderTransactions from "../components/HeaderTransactions";
import Transactions from "../components/Transactions";
import HeaderProfile from "../components/HeaderProfile";
import { useParams } from "react-router-dom";
import DATA_ACCOUNTS from "../services/__mocks__/accounts";

function AccountDetails() {
  const { accountId } = useParams();

  const SINGLE_ACCOUNT = DATA_ACCOUNTS.find(
    (account) => account.id === parseInt(accountId)
  );

  return (
    <>
      <main className="main bg-dark">
        <HeaderProfile />
        <HeaderTransactions
          key={SINGLE_ACCOUNT.id}
          title={SINGLE_ACCOUNT.title}
          sum={SINGLE_ACCOUNT.money}
          specs={SINGLE_ACCOUNT.balanceType}
        />

        <Transactions />
      </main>
    </>
  );
}

export default AccountDetails;
