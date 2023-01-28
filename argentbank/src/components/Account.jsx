import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Account({ singleAccountid, title, money, balanceType }) {
  const accountId = singleAccountid;
  const { id } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const onTransactions = () => {
    navigate(`/accounts/${id}/account/${accountId}`);
  };

  return (
    <>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{money}</p>
          <p className="account-amount-description">{balanceType}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button" onClick={onTransactions}>
            View transactions
          </button>
        </div>
      </section>
    </>
  );
}

Account.propTypes = {
  title: PropTypes.string.isRequired,
  money: PropTypes.string.isRequired,
  balanceType: PropTypes.string.isRequired,
};

export default Account;
