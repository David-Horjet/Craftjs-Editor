import React from 'react';
import { useNode } from '@craftjs/core';
import { containerStyle } from './Root.style';

export const Root = ({ children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div {...props} ref={(ref) => connect(drag(ref))} style={containerStyle}>
        {children}
    </div>
  );
};