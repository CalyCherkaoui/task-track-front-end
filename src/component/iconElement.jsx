/* eslint-disable no-console */
import React from 'react';
import { PropTypes } from 'prop-types';
// import { IconContext } from 'react-icons';

const iconElement = ({ iconclassname }) => {
  console.log(iconclassname);

  return (
    <div>
      <i className={iconclassname} />
    </div>
  );
};

iconElement.propTypes = {
  iconclassname: PropTypes.string.isRequired,
};
export default iconElement;
