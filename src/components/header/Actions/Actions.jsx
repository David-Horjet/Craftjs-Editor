import React from 'react';
import { Flex, Button, Row, Dropdown } from 'antd';
import { Undo, Redo, NavArrowDown } from 'iconoir-react';
import { dropdownStyle, saveStatusStyle } from './Actions.style';
import { useEditor } from "@craftjs/core";

export const Actions = () => {
    const { query } = useEditor();

    const dropdownItems = [
        {
            label: 'Send test email',
            key: '1',
            danger: true,
            onClick: () => console.log('clicked: Send test email')
        },
        {
            label: 'Save as template',
            key: '2',
            danger: true,
            onClick: () => console.log('clicked: Save as template')
        },
        {
            label: 'Exit',
            key: '3',
            danger: true,
            onClick: () => console.log('clicked: Exit')
        }
    ];

    return (
        <Flex justify='flex-start' align='center' gap={20}>
            <span style={saveStatusStyle}>Changes saved</span>
            <Row>
                <Button type='text'><Undo/></Button>
                <Button type='text'><Redo/></Button>
            </Row>
            <Button
                type='primary'
                ghost
                onClick={() => console.log(query.serialize())}
            >
                Preview
            </Button>
            <Dropdown.Button
                onClick={() => console.log('clicked: Save and exit')}
                style={dropdownStyle}
                type='primary'
                menu={{items: dropdownItems}}
                placement='bottomRight'
                icon={<NavArrowDown />}
            >
                Save and exit
            </Dropdown.Button>
        </Flex>
    )
};