import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

function TransactionLineisUpdated() {
  const [getCategoryExpanded, setgetCategoryExpanded] = useState(false);
  const [getNotesExpanded, setgetNotesExpanded] = useState(false);

  const handleUpdateTransactions = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setgetCategoryExpanded(!getCategoryExpanded);
    setgetNotesExpanded(!getNotesExpanded);
  };

  const update = (event) => {
    event.preventDefault();
    setgetCategoryExpanded(!getCategoryExpanded);
    setgetNotesExpanded(!getNotesExpanded);
  };

  return (
    <div className="transaction-description">
      <div className="transaction-type">
        <p>Transaction Type: </p> <span>Eletronic</span>
      </div>
      <div className="transaction-category">
        <p>Category: </p> <span>Food</span>
        <span className="transaction-icon" onClick={handleUpdateTransactions}>
          <FaPencilAlt />
        </span>
        {getCategoryExpanded && (
          <div className="transaction-category-input">
            <form className="form-horizontal">
              <textarea
                id="food"
                rows="4"
                cols="50"
                placeholder="Enter a new category"
              />
            </form>
          </div>
        )}
      </div>
      <div className="transaction-notes">
        <p>Notes: </p>
        <span className="transaction-icon" onClick={handleUpdateTransactions}>
          <FaPencilAlt />
        </span>
        {getNotesExpanded && (
          <div className="transaction-category-input">
            <form className="form-horizontal">
              <textarea
                id="notes"
                rows="4"
                cols="50"
                placeholder="Enter your note"
              />

              <div className="edit-form-button">
                <button className="edit-button" type="submit" onClick={update}>
                  Save
                </button>
                <button
                  className="edit-button"
                  type="button"
                  onClick={handleUpdateTransactions}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

    </div>
  );
}

export default TransactionLineisUpdated;
