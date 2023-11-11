import React from 'react';
import { textStyle } from './SettingsTitle.style';

export const SettingsTitle = ({children}) => {
    return (
        <span style={textStyle}>
            {children}
        </span>
    )
};