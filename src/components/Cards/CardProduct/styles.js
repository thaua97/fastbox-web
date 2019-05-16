import styled from 'styled-components'

const Card = styled.div`
    cursor: pointer;
    text-decoration: none;
    width: 257px;
    height: 200px;
    margin: 10px;
    display: block;
    border-radius: 25px;
    background: #ffffff;
`
const CardImage = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 25px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0, 0.4);
    background-image: linear-gradient(45deg, #B131FF87, #B131FF97), url(${props => props.img || 'https://www.tecomat.com/uploads/Products/no-image.png'});
    background-position: center;
    background-repeat: no-repeat;
    text-decoration: none;
`
const CardTitle = styled.h1`
    font-weight: 300;
    color: #fff;
    text-decoration: none;
`
export { Card, CardImage, CardTitle }
