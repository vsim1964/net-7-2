import React from 'react';

export default function Video(props) {
  return (
      <div className="item item-video">
        <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <p className="views">Просмотров: {props.views}</p>
      </div>
  )
};
