import React from 'react';

const validation = (props) => {
  return (
    <div>
      <p>{props.charLength >= 5 ? `Text long enough` : `Text too short`}</p>
    </div>
  );
  
}

export default validation;