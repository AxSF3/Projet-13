import { useState } from "react";
import PropTypes from "prop-types";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import TransactionLineisUpdated from "../components/TransactionLineisUpdated";

function TransactionLine({ date, description, amount, balance }) {
  const [isExpanded, setisExpanded] = useState(false);

  return (
    <>
      <div
        className="transaction-line"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setisExpanded(!isExpanded);
        }}
      >
        <button>{isExpanded ? <FaAngleDown /> : <FaAngleUp />}</button>
        <div>{date}</div>
        <div>{description}</div>
        <div>{amount}</div>
        <div>{balance}</div>
      </div>

      {isExpanded && <TransactionLineisUpdated />}
    </>
  );
}

TransactionLine.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
};

export default TransactionLine;
