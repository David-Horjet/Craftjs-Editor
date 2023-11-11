import React from 'react'
import { useNode } from '@craftjs/core';
import { TextSettings } from './TextSettings';
import { TextDefaultProps } from './Text.defaults';
import { selectedArea } from './Text.style';
import { ComponentControls } from '../../reusables/ComponentControls/ComponentControls';


export const Text = ({text, paddingTop, paddingBottom, paddingRight, paddingLeft}) => {
  const {
    connectors: { connect, drag },
    selected,
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  return (
      <div
        ref={(ref) => connect(drag(ref))}
        onClick={() => selected}
        style={{position: 'relative', overflow: 'visible'}}
      >
        <div
            className='hover'
            style={{
                ...(selected ? selectedArea : null),
                paddingTop,
                paddingBottom,
                paddingRight,
                paddingLeft
            }}
            dangerouslySetInnerHTML={{ __html: text }}
        >
        </div>
        {selected && <ComponentControls/>}
      </div>
  )
}

Text.craft = {
  props: TextDefaultProps,
  related: {
    settings: TextSettings,
  },
};
