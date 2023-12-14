import React from 'react';
import './notification.css';
import { useNotification } from '../pages/usecontextpage';

const NotificationIcon = ({ onIconClick }) => {
  const { totalNotifications } = useNotification();
  return (
    <div className='notification-icon' onClick={onIconClick}>
      {totalNotifications !== null ? (
        <p className='notification-text'>
          <img src="images/noticon.png" alt="logo" className="noteicon" /> <span className='value'>{totalNotifications}</span>
        </p>
      ) : (
        <p className='notification-text'><img src="images/noticon.png" alt="logo" className="noteicon" /></p>

      )}
    </div>
  );
};

export default NotificationIcon;
