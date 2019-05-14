import React from 'react';

import { Card, CardImage, CardTitle } from './styles';

const CardProduct = (props) => (
    <Card href={props.url}>
        <CardImage img={props.image} alt="img">
            <CardTitle>{props.title}</CardTitle>
        </CardImage>
    </Card>
)

export default CardProduct;
