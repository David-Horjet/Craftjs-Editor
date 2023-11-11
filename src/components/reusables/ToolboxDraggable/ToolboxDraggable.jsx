import React from 'react';
import { Card, Flex } from 'antd';
import SelectionDots from './../../../assets/selection_dots.svg'
import { cardBodyStyle, cardStyle, labelStyle } from './ToolboxDraggable.style';

export const ToolboxDraggable = React.forwardRef(({ icon, label }, ref) => (
        <Card style={cardStyle} bodyStyle={cardBodyStyle} ref={ref}>
            <Flex gap={8} vertical justify='center' align='center'>
                <img src={icon} width={40} height={24}/>
                <span style={labelStyle}>{label}</span>
                <img src={SelectionDots} width={22} height={6}/>
            </Flex>
        </Card>
    )
)