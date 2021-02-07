import React from 'react'

import { Likes } from '../Likes';
import './Card.css';

export const Card = React.memo(({data}) => {
  const { urls, alt_description, user, likes, description, color } = data;
  return (
    <li className="card">
      {
        urls &&
        <>
          <img className="picture" src={urls?.small} alt={alt_description} style= {{ backgroundColor: color }}/>
          <div className="card-info">
            <p>{alt_description?? description}</p>
            <Likes count={likes}/>
          </div>
          <img className="avatar" src={user.profile_image?.small} alt={user?.name}/>
          <span className="avatar-name">{user.name}</span>
        </>
      }
    </li>
  )
});
