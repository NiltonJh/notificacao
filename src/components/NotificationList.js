import React, { useContext } from 'react';
import { NotificationContext } from './NotificationContext';
import NotificationItem from './NotificationItem';

const NotificationList = () => {
  const { notifications } = useContext(NotificationContext);

  return (
    <div className="notification-list">
      {notifications.map(notification => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationList;