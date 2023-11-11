import React from 'react';
import { Element, useNode } from '@craftjs/core';
import { selectedArea, containerStyle } from './LayoutOne.style';
import { LayoutOneSettings } from './LayoutOneSettings';
import { LayoutOneDefaultProps } from './LayoutOne.defaults';
import { Container } from '../Container/Container';

export const LayoutOne = ({ backgroundColor, paddingTop, paddingBottom, paddingLeft, paddingRight }) => {
  const {
    connectors: { connect, drag },
    selected
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  return (
    <div
        className='hover'
        ref={(ref) => connect(drag(ref))}
        onClick={() => selected}
        style={{
            ...containerStyle,
            ...(selected ? selectedArea : null),
            paddingTop,
            paddingBottom,
            paddingLeft,
            paddingRight,
            backgroundColor
        }}
    >
        <Element is={Container} canvas id='layout-1'/>
    </div>
  );
};

LayoutOne.craft = {
    displayName: 'Layout',
    props: LayoutOneDefaultProps,
    related: {
        settings: LayoutOneSettings,
    },
    rules: {
        canDrop: (targetItem) => {
            console.log(targetItem.data)
            return targetItem.data.name !== 'Container' || !targetItem.data.parent;
        }
    }
};