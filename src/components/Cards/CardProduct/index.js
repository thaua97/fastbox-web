import React from 'react';

import { Card, CardImage, CardTitle } from './styles'
import { Link } from 'react-router-dom'

const CardProduct = (props) => (
    
        <Card>
            <Link style={{ textDecoration: 'none' }} to={props.url}>
                <CardImage img={props.image} alt="img">
                    <CardTitle>{props.title}</CardTitle>
                </CardImage>
            </Link>
        </Card>
    
)

export default CardProduct
