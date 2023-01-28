import PropTypes from "prop-types";

function HeaderTransactions({ title, sum, specs }) {
  return (
    <>
      <div className="header">
        <div className="header-transactions-wrapper">
          <p>{title}</p>
          <h1>{sum}</h1>
          <p>{specs}</p>
        </div>
      </div>
    </>
  );
}

HeaderTransactions.propTypes = {
  title: PropTypes.string.isRequired,
  sum: PropTypes.string.isRequired,
  specs: PropTypes.string.isRequired,
};

export default HeaderTransactions;
