import React from 'react';
import { Row, Col, Button } from 'antd';
import { NavArrowLeft } from 'iconoir-react';
import { buttonStyle, textStyle } from './CustomTitle.style';

export const CustomTitle = ({text, doneAction}) => {
    return (
        <Row align='middle'>
            <Button style={buttonStyle} type='text' onClick={doneAction} icon={<NavArrowLeft height={17}/>}>
                Done
            </Button>
            <Col span={18}>
                <p style={textStyle}>{text}</p>
            </Col>
        </Row>
    )
};