import React from 'react';

const Style = ({ type = 'span', children, ...styles }) => {
  let { props = {}, type: Tag = 'div' } = children;

  const style = { ...props.style, ...styles };

  if (typeof children === 'string') {
    Tag = type;
    props.children = children;
  }

  return <Tag {...props} style={style} />;
};

export default Style;
