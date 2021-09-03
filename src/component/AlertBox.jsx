import React from 'react';
import { PropTypes } from 'prop-types';
import Alert from 'react-bootstrap/Alert';

const AlertBox = ({ alertprops }) => (
  <>
    <Alert variant={alertprops.variant}>
      {alertprops.message}
    </Alert>
  </>
);

AlertBox.propTypes = {
  alertprops: PropTypes.shape(
    {
      message: PropTypes.string,
      variant: PropTypes.string,
    },
  ).isRequired,
};

export default AlertBox;
