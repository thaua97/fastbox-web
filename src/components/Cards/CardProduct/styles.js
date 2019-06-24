import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 257px;
    height: 200px;
    margin: 10px;
    border-radius: 25px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
    background: #ffffff;
    
`
const CardImage = styled.img`
    width: 50%;
    height: auto;
`
const CardInfo = styled.div`
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    
    :hover {
        opacity: 1;
    }
`
const CardTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 257px;
    height: 200px;
    margin: 10px;
    border-radius: 25px;    
    background: linear-gradient(45deg, #a011ff87, #ff8ce0d9);
    color: white;
    font-size: 16px;
`
const Text = styled.p`
    padding: 20px;
    font-size: ${ props => `${props.size}px` || '20px'};
    font-weight: 200;
    color: #Fff;
`
const Btn = styled(Link)`
    height: 50px;
    widht: 50px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
    text-decoration: none;
    

`
export { Card, CardImage, CardInfo, CardTitle, Text, Btn }
