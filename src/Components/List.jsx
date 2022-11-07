import React from 'react';
import Video from './Video';
import Article from './Article';
import WrapHOC from './WrapHOC';
const PopularVideo = WrapHOC(Video);
const PopularArticle = WrapHOC(Article);

export default function List(props) {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
            <PopularVideo {...item} />
        );
      case 'article':
        return (
            <PopularArticle {...item} />
        );
    }
  });
};
