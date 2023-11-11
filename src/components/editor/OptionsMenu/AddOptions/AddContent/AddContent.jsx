import React from 'react';
import { Flex } from 'antd';
import { useEditor } from '@craftjs/core';
import { ToolboxDraggable } from '../../../../reusables/ToolboxDraggable/ToolboxDraggable';
import HeadingIcon from '../../../../../assets/toolbox_draggables/heading.svg'
import ParagraphIcon from '../../../../../assets/toolbox_draggables/paragraph.svg'
import ButtonIcon from '../../../../../assets/toolbox_draggables/button.svg'
import DividerIcon from '../../../../../assets/toolbox_draggables/divider.svg'
import SpacerIcon from '../../../../../assets/toolbox_draggables/spacer.svg'
import ImageIcon from '../../../../../assets/toolbox_draggables/image.svg'
import VideoIcon from '../../../../../assets/toolbox_draggables/video.svg'
import SocialIcon from '../../../../../assets/toolbox_draggables/social.svg'
import CodeIcon from '../../../../../assets/toolbox_draggables/code.svg'
import { Text } from '../../../../user/Text/Text';

export const AddContent = () => {
    const { connectors } = useEditor();
    return (
        <Flex gap={8} wrap='wrap'>
            <ToolboxDraggable
                icon={HeadingIcon}
                label='Heading'
                ref={(ref) => connectors.create(ref, <Text/>)}
            />
            <ToolboxDraggable
                icon={ParagraphIcon}
                label='Paragraph'
            />
            <ToolboxDraggable
                icon={ButtonIcon}
                label='Button'
            />
            <ToolboxDraggable
                icon={DividerIcon}
                label='Divider'
            />
            <ToolboxDraggable
                icon={SpacerIcon}
                label='Spacer'
            />
            <ToolboxDraggable
                icon={ImageIcon}
                label='Image'
            />
            <ToolboxDraggable
                icon={VideoIcon}
                label='Video'
            />
            <ToolboxDraggable
                icon={SocialIcon}
                label='Social'
            />
            <ToolboxDraggable
                icon={CodeIcon}
                label='Code'
            />
        </Flex>
    )
};