import React from 'react';
import { PropTypes } from 'prop-types';
import AlertBox from './AlertBox';

const AlertNotifications = ({ message }) => (
  <div>
    <div
      id="success_notif"
      style={{ display: 'none', color: 'green' }}
    >
      <AlertBox
        alertprops={{
          variant: 'success',
          message: `${message}`,
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

AlertNotifications.propTypes = {
  message: PropTypes.string.isRequired,
};

export default AlertNotifications;
