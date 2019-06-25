import React from 'react'
import styled from 'styled-components'

const Base = styled.div`
    width: ${ props => `${props.w}px` || '100%'};
    height: ${props => `${props.h}px` || !props.w ? '345px' : props.w };
    border-radius: 25px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
    background: #fff, center;
`

const Container = styled.div`
    padding: 20px;
    margin: 5px;
`
const Title = styled.div`
    font-size: 24px;
    font-weight: 200;
    color: #d33ff8d9;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

function Card(props){
    
    return (
        <Base w={props.width} h={props.height}>
            <Container>
                {   
                    props.title ?
                        <Title>{props.title}</Title>
                    : 
                        <span></span>
                }
                <Content>
                    {props.children}
                </Content>
            </Container>
        </Base>
    )
}

export default Card