import React from 'react';
import { useMenuStore } from '../../../stores/menuStore';
import { AddOptions } from './AddOptions/AddOptions';

export const OptionsMenu = () => {
    const { activeStyleState: selectedMenu } = useMenuStore()



    if (selectedMenu === 'addActive') {
        return (
            <AddOptions/>
        )
    }
    if (selectedMenu === 'styleActive') {
        return (
            <p>Style Active</p>
        )
    }
};