import React from 'react';

import './Likes.css';

export const Likes = React.memo(({count = 0}) =>
  (
    <div className="likes">
      <span className="likes-count">{count}</span>
      <div className="heart"></div>
    </div>
  ),
  (prevProps, nextProps) => {
    if (prevProps.count === nextProps.count) return true;
    return false;
  }
);
