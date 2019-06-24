import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    padding: 90px;
    margin: 8px 2px;
`
const Box = styled.div`
    display: flex;
    flex-direction: ${ props => props.direction || 'row'};
    justify-content: flex-start; 
    align-items: center;
`
const Logo = styled.img`
    width: 100%;
    height: 100%;
    margin-left: -10%;
`

const Banner = styled.aside`
    height: 800px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #a011ff87, #ff8ce0d9), 
    url('https://images.pexels.com/photos/761999/pexels-photo-761999.jpeg?cs=srgb&dl=beautiful-beauty-blond-761999.jpg&fm=jpg?dl&fit=crop&crop=entropy&w=1280&h=853') no-repeat center;
    position: fixed;
`
const Content = styled.div`
    height: 100%;
    width: 50%;
    margin-left: 50%;
    background: #fff;
`

const Title = styled.h1`
    font-size: 2.8rem;
`

const Subtitle = styled.p`
    font-size: 0.6rem;
`

const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 375px;

    p {
        margin-top: 20px; 
        color: #a3a3a3;
    }
`

const TextField = styled.input`
    height: 45px;
    width: 100%;
    padding: 5px 30px;
    margin: 20px 0;
    border: none;
    border-bottom: 2px solid #b3b3b3;
    font-size: 1rem;
    color: #f3f;
    position: relative;
    touch-action: manipulation;
    transition: 0.25s;
    
    ::placeholder {
        color: #a3a3a3;
    }

    :focus {
        border-bottom: 2px solid #f3f;
        background: #f1f1f1;
    }
`

const Button = styled.button`
    cursor: pointer;
    width: 100%;
    height: 45px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff8ce0;
    color: #fff;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 25px;

    
`

const ButtonRegister = styled(Link)`
    width: 100%;
    height: 45px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    color: #ff8ce0;
    text-decoration: none;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    cursor: pointer;
`

export { ButtonRegister, Button ,TextField, FormLogin, Subtitle, Title, Banner, Logo, Box, Content, Container }
