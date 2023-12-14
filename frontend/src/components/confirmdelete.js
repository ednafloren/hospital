// ConfirmDeleteDialog.js

import React from 'react';
import './conf.css';

const ConfirmDeleteDialog = ({ isOpen, onCancel, onConfirm }) => {
  return (
    <div className={`confirm-delete-dialog ${isOpen ? 'open' : ''}`}>
      <div className="dialog-content">
        <p>Are you sure you want to delete this item?</p>
        <div className="buttons">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteDialog;
