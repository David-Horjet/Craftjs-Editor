import React from 'react';
import { Layout, ConfigProvider, Flex } from 'antd';
import { Menu } from './components/editor/Menu/Menu';
import { OptionsMenu } from './components/editor/OptionsMenu/OptionsMenu';
import './App.css'
import { Logo } from './components/header/Logo/Logo';
import { Actions } from './components/header/Actions/Actions';
import { Canvas } from './components/editor/Canvas/Canvas';
import { SettingsMenu } from './components/editor/SettingsMenu/SettingsMenu';
import { layoutStyle, headerStyle, siderMenuStyle, siderOptionsStyle, contentStyle, siderSettingsStyle } from './Apps.style';
import { useEditor } from '@craftjs/core';

const config = {
  token: {
    borderRadius: 4,
    colorPrimary: '#8a2ee8',
    colorInfo: '#8a2ee8',
    colorTextBase: '#716b67',
    colorError: '#8a2ee8'
  }
};

const { Header, Sider, Content } = Layout;

export const App = () => {
    const { selected } = useEditor((state, query) => {
        const currentNodeId = query.getEvent('selected').last();

        let selected;

        if (currentNodeId) {
            selected = {
                id: currentNodeId,
                name: state.nodes[currentNodeId].data.name,
                settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
                isDeletable: query.node(currentNodeId).isDeletable(),
            };
        }

        return {
            selected,
            isEnabled: state.options.enabled,
        };
    });

    return (
    <ConfigProvider theme={config}>
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>
                <Flex justify='space-between' align='center' style={{marginTop: 18}}>
                    <Logo/>
                    <Actions/>
                </Flex>
            </Header>
            <Layout hasSider>
                {!selected?.settings &&
                    <Sider style={siderMenuStyle} width={80}>
                        <Menu/>
                    </Sider>
                }
                {!selected?.settings &&
                    <Sider style={siderOptionsStyle} width={325}>
                        <OptionsMenu/>
                    </Sider>
                }
                {!!selected?.settings &&
                    <Sider style={siderSettingsStyle} width={405}>
                        <SettingsMenu/>
                    </Sider>
                }
                <Content style={contentStyle}>
                    <Flex justify='center' style={{height: '100%'}}>
                        <Canvas/>
                    </Flex>
                </Content>
            </Layout>
        </Layout>
    </ConfigProvider>
  )
}

export default App
