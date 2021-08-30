import React from 'react';
import AlertBox from './AlertBox';

function AlertNotifications() {
  return (
    <div>
      <div
        id="success_notif"
        style={{ display: 'none', color: 'green' }}
      >
        <AlertBox
          alertprops={{
            variant: 'success',
            message: 'Successfully Added!',
          }}
        />

      </div>
      <div
        id="errors_notif"
        style={{ display: 'none', color: 'red' }}
      >
        <AlertBox
          alertprops={{
            variant: 'danger',
            message: 'Oops! Something went wrong! Try again!',
          }}
        />
      </div>
    </div>
  );
}

export default AlertNotifications;
