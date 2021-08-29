import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const AlertBox = ({ alertprops }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant={alertprops.variant}>
        <Alert.Heading>{alertprops.message}</Alert.Heading>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant={alertprops.variant}>
            <i
              className="fas fa-times"
              style={{ fontSize: '20px' }}
            />
          </Button>
        </div>
      </Alert>
    </>
  );
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
