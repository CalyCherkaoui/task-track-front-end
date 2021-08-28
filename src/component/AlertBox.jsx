import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Alert from 'react-bootstrap/Alert';

const AlertBox = ({ alertprops }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant={alertprops.variant} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{alertprops.message}</Alert.Heading>
      </Alert>
    );
  }
  return <div />;
};

AlertBox.propTypes = {
  alertprops: PropTypes.shape(
    {
      message: PropTypes.string,
      variant: PropTypes.string,
    },
  ).isRequired,
};

export default AlertBox;
