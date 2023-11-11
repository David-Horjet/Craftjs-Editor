import React from 'react'
import { useNode } from '@craftjs/core';
import { Flex, Tabs } from 'antd';
import { TextDesign } from './TextDesign';

const tabItems = (text, paddingTop, paddingBottom, paddingRight, paddingLeft, setProp) => [
    {
        label: 'Design',
        children: (
            <TextDesign
                text={text}
                setProp={setProp}
                paddingTop={paddingTop}
                paddingBottom={paddingBottom}
                paddingRight={paddingRight}
                paddingLeft={paddingLeft}
            />
        ),
        key: 'design'
    },
    {
        label: 'Code',
        children: <></>,
        key:'code'
    },
];

export const TextSettings = () => {
    const {
        actions: { setProp },
        // fontSize,
        text,
        paddingTop,
        paddingBottom,
        paddingRight,
        paddingLeft
    } = useNode((node) => ({
        text: node.data.props.text,
        paddingTop: node.data.props.paddingTop,
        paddingBottom: node.data.props.paddingBottom,
        paddingRight: node.data.props.paddingRight,
        paddingLeft: node.data.props.paddingLeft,
    }));

    return (
        <Flex vertical>
            <Tabs
                defaultActiveKey='1'
                items={tabItems(text, paddingTop, paddingBottom, paddingRight, paddingLeft, setProp)}
                size='large'
                animated={false}
                tabBarGutter={0}
            />
        </Flex>
    );
};
