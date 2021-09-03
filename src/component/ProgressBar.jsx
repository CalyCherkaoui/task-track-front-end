import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);
  const {
    size,
    percentage,
    strokeWidth,
    innCircleStroke,
    exoCircleStroke,
  } = props;

  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - percentage) / 100) * circumference;
    setOffset(progressOffset);
    circleRef.current.style = 'transition: 1500ms ease-in-out;';
  }, [offset, setOffset, circumference, percentage]);
  return (
    <div>
      <svg
        className="svg_progress_bar"
        width={size}
        height={size}
      >
        <circle // the inner circle
          className="in_circle"
          cx={center}
          cy={center}
          r={radius}
          stroke={innCircleStroke}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
        />
        <circle
          className="exo_circle"
          ref={circleRef}
          cx={center}
          cy={center}
          r={radius}
          stroke={exoCircleStroke}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
    </div>
  );
};

ProgressBar.propTypes = {
  size: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  innCircleStroke: PropTypes.string.isRequired,
  exoCircleStroke: PropTypes.string.isRequired,
};

export default ProgressBar;
