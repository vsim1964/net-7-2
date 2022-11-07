import React from 'react';
import Popular from './Popular';
import New from './New';

export default function WrapHOC(Component) {
  return (props) => {
    if (props.views > 1000) {
      return (
          <Popular>
            <Component {...props} />
          </Popular>
      )
    }
    if (props.views < 100) {
      return (
          <New>
            <Component {...props} />
          </New>
      )
    }
    return <Component {...props} />
  }
}

