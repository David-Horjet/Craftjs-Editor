import React from 'react';
import { useEditor } from '@craftjs/core';
import { Button, Flex } from 'antd';
import { containerStyle } from './ComponentControls.style';
import { Trash, ArrowSeparateVertical } from 'iconoir-react';

export const ComponentControls = () => {
    const { selectedNodeId, actions } = useEditor((_, query) => ({
        selectedNodeId: query.getEvent('selected').last()
    }));

    if (!selectedNodeId) {
        return null
    }

    return (
        <div style={containerStyle}>
            <Flex vertical gap={5}>
                <Button style={{padding: 5}} type='text'><ArrowSeparateVertical/></Button>
                <Button
                    style={{padding: 5}}
                    type='text'
                    onClick={() => {
                        actions.delete(selectedNodeId)
                    }}
                >
                    <Trash color='#E92828'/>
                </Button>
            </Flex>
        </div>
    )
};