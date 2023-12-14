import { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

export const useNotification = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
  const [notificationCount, setNotificationCount] = useState(0);

  const updateNotifications = (count) => {
    setNotificationCount(count);
  };

  const resetNotifications = () => {
    setNotificationCount(0);
  };

  return (
    <NotificationContext.Provider value={{ notificationCount, updateNotifications, resetNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};
