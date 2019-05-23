import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import { 
    Button, 
    TextField ,
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

export default class Register extends Component {
    state = {
        usarname: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleLogin =  (e) => {
        e.preventDefault()

        this.props.history.push(`/`)
    
    }

    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value })
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    handleConfirmPasswordChange = (e) => {
        this.setState({ confirmPassword: e.target.value })
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
                                    placeholder="Nome de Usuário"
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleUsernameChange}
                                />
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
                                <TextField 
                                    placeholder="Confirmar Senha"
                                    type="password"
                                    value={this.state.confirmPassword}
                                    onChange={this.handleConfirmPasswordChange}
                                />
                                <Button type="submit">registrar</Button>
                                <Link to="/login" style={{ textDecoration: 'none', marginTop: '15px', fontSize: '1rem', color: '#ff8ce0' }}>Já possui conta!</Link>
                            </FormLogin>
                        </Box>
                    </Container>
                </Content>
            </Box>
        )
    }
}
