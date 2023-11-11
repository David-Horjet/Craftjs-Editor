import React from 'react';
import { useNode } from '@craftjs/core';
import { containerInnerStyle, containerStyle } from './Container.style';

export const Container = ({ children, style, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div {...props} ref={(ref) => connect(drag(ref))} style={{...containerStyle, ...style}}>
      {children ? (
        children
      ) : (
        <div style={containerInnerStyle}>
            Drop content here
        </div>
      )}
    </div>
  );
};