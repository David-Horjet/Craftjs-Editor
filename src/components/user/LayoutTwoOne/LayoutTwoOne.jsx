import React from "react";
import { Element, useNode } from '@craftjs/core';
import { LayoutTwoOneDefaultProps } from "./LayoutTwoOne.defaults";
import { LayoutTwoOneSettings } from "./LayoutTwoOneSettings";
import { Container } from "../Container/Container";
import { containerStyle, selectedArea } from "./LayoutTwoOne.style";

export const LayoutTwoOne = ({ backgroundColor, paddingTop, paddingBottom, paddingLeft, paddingRight }) => {
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
            <Element
                is={Container}
                id={'layout21-1'}
                canvas
                style={{
                    flex: 1
                }}
            />
            <Element
                is={Container}
                id={'layout21-2'}
                canvas
                style={{
                    flex: 1
                }}
            />
        </div>
    ) ;
};

LayoutTwoOne.craft = {
    displayName: 'Layout',
    props: LayoutTwoOneDefaultProps,
    related: {
        settings: LayoutTwoOneSettings,
    },
    rules: {
        canDrop: (targetItem) => {
            console.log(targetItem.data)
            return targetItem.data.name !== 'Container' || !targetItem.data.parent;
        }
    }
};