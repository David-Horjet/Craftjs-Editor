import React from 'react';
import { useEditor } from '@craftjs/core';
import { Button } from 'antd';
import { CustomTitle } from '../../reusables/CustomTitle/CustomTitle';

export const SettingsMenu = () => {
    const { actions, selected } = useEditor((state, query) => {
        const currentNodeId = query.getEvent('selected').last();

        let selected;

        if (currentNodeId) {
            selected = {
                id: currentNodeId,
                name: state.nodes[currentNodeId].data.displayName || state.nodes[currentNodeId].data.name,
                settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
                isDeletable: query.node(currentNodeId).isDeletable(),
            };
        }

        return {
            selected,
            isEnabled: state.options.enabled,
        };
    });

    if (!selected) {
        return null
    }

    return (
        <div>
            <CustomTitle text={selected.name} doneAction={() => actions.selectNode(null)}/>
            {selected.settings && React.createElement(selected.settings)}
            {selected.isDeletable ? (
                <Button
                    onClick={() => {
                        actions.delete(selected.id)
                    }}
                >
                    Delete
                </Button>
            ) : null}
        </div>
    )
};