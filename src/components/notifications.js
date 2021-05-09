import 'react-notifications/lib/notifications.css';
import {NotificationManager} from 'react-notifications';

const createNotification = (type) => {    
    switch (type) {
      case 'info':
        return NotificationManager.info('Show Information');        
      case 'success':
        return NotificationManager.success('Success!', 'Registered!');        
      case 'warning':
        return NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
      case 'error':
        return NotificationManager.error('Error', 'Something went wrong!', 5000);        
    }
};

export default createNotification;
