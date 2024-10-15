import React, { useContext } from 'react';
import { NotificationContext } from './NotificationContext';

const NotificationIcon = () => {
  const { notifications } = useContext(NotificationContext);
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div>
      <i className="notification-icon">🔔</i>
      {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
    </div>
  );
};

export default NotificationIcon;