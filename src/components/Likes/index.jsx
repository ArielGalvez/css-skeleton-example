import React from 'react';

import './Likes.css';

export const Likes = ({count = 0}) => {
  return (
    <div className="likes">
      <span className="likes-count">{count}</span>
      <div className="heart"></div>
    </div>
  )
}
