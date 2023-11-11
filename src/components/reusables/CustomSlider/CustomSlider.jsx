import React from 'react';
import { Slider, Flex } from 'antd';
import { floatLeft, floatRight } from './CustomSlider.style';

export const CustomSlider = ({label, value, setValue}) => {
    return (
        <div style={{width: '100%'}}>
            <Flex justify='space-between'>
                <span style={floatLeft}>{label}</span>
                <span style={floatRight}>{value}px</span>
            </Flex>
            <Slider
                min={0}
                max={100}
                onChange={(val) => {
                    setValue(val)
                }}
                value={value}
            />
        </div>
    )
};