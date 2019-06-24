import React from 'react';

import { Card, CardImage, CardInfo, CardTitle, Text, Btn } from './styles'
import { MdVisibility } from 'react-icons/md'

const CardProduct = (props) => (
    <Card to={props.url}>  
        <CardImage src={props.image} alt="img"/>
        <CardInfo>
            <CardTitle>
                <Text size={36}>{props.text}</Text>
                <Btn to={`/produtos/${props.url}`}>
                    <MdVisibility size={40} />
                </Btn>
            </CardTitle>
        </CardInfo>
    </Card>
    
)

export default CardProduct
