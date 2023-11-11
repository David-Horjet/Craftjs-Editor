import React from 'react';
import { Flex } from 'antd';
import LogoImage from './../../../assets/logo.svg'
import { textStyle } from './Logo.style';

export const Logo = () => {
  return (
    <Flex justify='flex-start' align='center' gap={20}>
        <img src={LogoImage}/>
        <span style={textStyle}>Builder</span>
    </Flex>
  )
};