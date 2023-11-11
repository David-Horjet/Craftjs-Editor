import React from 'react';
import { Tabs } from 'antd';
import { AddContent } from './AddContent/AddContent';
import { AddLayout } from './AddContent/AddLayout';

const items = [
    {
        label: 'Content',
        children: (<AddContent/>),
        key: 'content'
    },
    {
        label: 'Layouts',
        children: (<AddLayout/>),
        key: 'layouts'
    },
];

export const AddOptions = () => {
    return (
        <Tabs
            defaultActiveKey='1'
            items={items}
            size='large'
            animated={false}
            tabBarGutter={0}
        />
    )
};