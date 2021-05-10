import 'react-notifications/lib/notifications.css';
import {NotificationManager} from 'react-notifications';

const createNotification = (type,detail) => {    
    switch (type) {
      case 'info':
        return NotificationManager.info(detail);        
      case 'success':
        return NotificationManager.success('Success!', detail,2000);        
      case 'warning':
        return NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
      case 'error':
        return NotificationManager.error('Error', detail, 5000);        
    }
};

export default createNotification;
