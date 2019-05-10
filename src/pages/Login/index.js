import React, { Component } from 'react';
import { Button, TextField ,FormLogin, Subtitle, Title, Banner, Logo, Box, Content, Container } from './styles';

import fblogo from '../../assets/fastbox.svg'

import api from '../../services/api'

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleLogin = async e => {
        e.preventDefault()
        
        const response = await api.post('/auth', {
            email: this.state.email,
            password: this.state.password
        })

        this.props.history.push(`/box/${response.data._id}`)
    
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
                            <Button type="submit">ACESSAR</Button>
                        </FormLogin>
                    </Box>
                </Container>
            </Content>
        </Box>
    )
  }
}
