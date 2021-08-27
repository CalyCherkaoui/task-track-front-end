import React from 'react';
import { useParams } from 'react-router-dom';

const RoutineDetailPage = () => {
  const { routineid } = useParams();
  return (
    <div>
      {routineid}
    </div>
  );
};

export default RoutineDetailPage;
