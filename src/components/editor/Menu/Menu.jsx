import React from 'react';
import { Flex } from 'antd';
import { PlusCircle, FillColor } from 'iconoir-react';
import { stateAddActive, stateStyleActive } from './Menu.style';
import { useMenuStore } from '../../../stores/menuStore';

export const Menu = () => {
  const { activeStyleState, setActiveStyleState } = useMenuStore()
  const styles = {
    addActive: stateAddActive,
    styleActive: stateStyleActive
  }
  return (
    <Flex vertical justify='center' align='center'>
        <button style={styles[activeStyleState].addButtonStyle} onClick={() => setActiveStyleState('addActive')}>
          <Flex vertical justify='center' align='center' style={styles[activeStyleState].addSpacerStyle}>
            <PlusCircle height={24} width={24}/>
            <span>Add</span>
          </Flex>
        </button>
        <button style={styles[activeStyleState].styleButtonStyle} onClick={() => setActiveStyleState('styleActive')}>
          <Flex vertical justify='center' align='center' style={styles[activeStyleState].styleSpacerStyle}>
            <FillColor height={24} width={24}/>
            <span>Style</span>
          </Flex>
        </button>
        <div style={styles[activeStyleState].emptyOuterDivStyle}>
          <div style={styles[activeStyleState].emptyInnerDivStyle}></div>
        </div>
    </Flex>
  )
};