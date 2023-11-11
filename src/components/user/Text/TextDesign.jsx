import React from 'react'
import { Flex, Input } from 'antd';
import { SettingsTitle } from '../../reusables/SettingsTitle/SettingsTitle';
import { CustomSlider } from '../../reusables/CustomSlider/CustomSlider';

export const TextDesign = ({text, paddingTop, paddingBottom, paddingRight, paddingLeft, setProp}) => {
    return (
        <Flex vertical gap={20} align='flex-start'>
            <Flex vertical gap={10} align='flex-start' style={{width: '100%'}}>
                <SettingsTitle>Content</SettingsTitle>
                <Input
                    value={text}
                    onChange={(e) => {
                        setProp((props) => (props.text = e.target.value), 1000)
                    }}
                />
            </Flex>
            <Flex vertical gap={10} align='flex-start' style={{width: '100%'}}>
                <SettingsTitle>Padding bottom</SettingsTitle>
                <CustomSlider label='Top' value={paddingTop} setValue={(val) => setProp((props) => (props.paddingTop = val), 1000)}/>
                <CustomSlider label='Right' value={paddingRight} setValue={(val) => setProp((props) => (props.paddingRight = val), 1000)}/>
                <CustomSlider label='Bottom' value={paddingBottom} setValue={(val) => setProp((props) => (props.paddingBottom = val), 1000)}/>
                <CustomSlider label='Left' value={paddingLeft} setValue={(val) => setProp((props) => (props.paddingLeft = val), 1000)}/>
            </Flex>
        </Flex>
    )
}
