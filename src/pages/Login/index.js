import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
    ButtonRegister,
    Button, 
    TextField, 
    FormLogin, 
    Subtitle, 
    Title, 
    Banner, 
    Logo, 
    Box, 
    Content, 
    Container 
} from './styles'

import fblogo from '../../assets/fastbox.svg'

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleLogin =  (e) => {
        e.preventDefault()

        this.props.history.push(`/`)
    
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }
    
  render() {
    return (
        <Box>
            <Banner>
                <Box>
                    <Logo src={fblogo} alt="logo" />
                </Box>
            </Banner>
            <Content>
                <Container>
                    <Box direction="column">
                        <Title>FastBox</Title>
                        <Subtitle>Sua necessidade nossa prioridade</Subtitle>
                        <FormLogin onSubmit={this.handleLogin}>
                            <TextField 
                                placeholder="E-mail"
                                type="email"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                            />
                            <TextField 
                                placeholder="Senha"
                                type="password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                            />
                            <Button type="submit">Acessar</Button>
                            <p style={{ marginTop: '20px', color: '#a3a3a3' }}>Ou</p>
                            <Link to="/register" style={{ cursor: 'pointer', textDecoration: 'none', width: '100%' }}>
                                <ButtonRegister>Registrar</ButtonRegister>
                            </Link>
                        </FormLogin>
                    </Box>
                </Container>
            </Content>
        </Box>
    )
  }
}
