import React from 'react';
import './SaveButton.scss';
import favouriteButton from '../../assets/images/favourite-button.svg';

const SaveButton = ({ handleSaveButtonPress, isPressed }) => {
  return (
    <img
      className={isPressed ? 'save-button save-button--active' : 'save-button'}
      alt="Save button"
      src={favouriteButton}
      data-testid="save-button-image"
      onClick={handleSaveButtonPress}
    />
  );
};

export default SaveButton;
