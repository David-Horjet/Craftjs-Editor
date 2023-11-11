import React from 'react';
import { Flex } from 'antd';
import { useEditor } from '@craftjs/core';
import { ToolboxDraggable } from '../../../../reusables/ToolboxDraggable/ToolboxDraggable';
import LayoutOneIcon from '../../../../../assets/toolbox_draggables/layout_one.svg'
import LayoutTwoOneIcon from '../../../../../assets/toolbox_draggables/layout_two_1.svg'
import LayoutTwoTwoIcon from '../../../../../assets/toolbox_draggables/layout_two_2.svg'
import LayoutTwoThreeIcon from '../../../../../assets/toolbox_draggables/layout_two_3.svg'
import LayoutTwoFourIcon from '../../../../../assets/toolbox_draggables/layout_two_4.svg'
import LayoutTwoFiveIcon from '../../../../../assets/toolbox_draggables/layout_two_5.svg'
import LayoutThreeIcon from '../../../../../assets/toolbox_draggables/layout_three.svg'
import LayoutFourIcon from '../../../../../assets/toolbox_draggables/layout_four.svg'
import { LayoutTwoOne } from '../../../../user/LayoutTwoOne/LayoutTwoOne';
import { LayoutOne } from '../../../../user/LayoutOne/LayoutOne';

export const AddLayout = () => {
    const { connectors } = useEditor();
    return (
        <Flex gap={8} wrap='wrap'>
            <ToolboxDraggable
                icon={LayoutOneIcon}
                label='1'
                ref={(ref) => connectors.create(ref, <LayoutOne/>)}
            />
            <ToolboxDraggable
                icon={LayoutTwoOneIcon}
                label='2'
            />
            <ToolboxDraggable
                icon={LayoutTwoTwoIcon}
                label='2'
            />
            <ToolboxDraggable
                icon={LayoutTwoThreeIcon}
                label='2'
                ref={(ref) => connectors.create(ref, <LayoutTwoOne/>)}
            />
            <ToolboxDraggable
                icon={LayoutTwoFourIcon}
                label='2'
            />
            <ToolboxDraggable
                icon={LayoutTwoFiveIcon}
                label='2'
            />
            <ToolboxDraggable
                icon={LayoutThreeIcon}
                label='3'
            />
            <ToolboxDraggable
                icon={LayoutFourIcon}
                label='4'
            />
        </Flex>
    )
};