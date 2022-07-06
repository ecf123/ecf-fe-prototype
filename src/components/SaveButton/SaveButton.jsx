import React from "react";
import "./SaveButton.scss";
import favouriteButton from "../../assets/images/favourite-button.svg";

const SaveButton = ({ handleSaveButtonPress }) => {
  return (
    <button
      onClick={handleSaveButtonPress}
      className="save-button"
      data-testid="save-button"
    >
      <img
        className="save-button--save"
        alt="Save button"
        src={favouriteButton}
        data-testid="save-button-image"
      />
    </button>
  );
};

export default SaveButton;
