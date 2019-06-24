import React, { Component } from 'react'
import api from '../../services/api'

import { 
    Button,
    ButtonLogin, 
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

import Snackbar from '../../components/Snackbar'

import fblogo from '../../assets/fastbox.svg'

export default class Register extends Component {
    state = {
        usarname: '',
        email: '',
        password: '',
        error: '',
        open: false,
        status: '',
        msg: ''
    }

    handleUsernameChange = e => {
        this.setState({ username: e.target.value })
    }

    handleEmailChange = e => {
        this.setState({ email: e.target.value })
    }

    handlePasswordChange = e => {
        this.setState({ password: e.target.value })
    }

    handleRegister = async e => {
        e.preventDefault()
        const { username, email, password } = this.state

        if (!username || !email || !password){
            this.setState({
                open: true, 
                status: 'warning', 
                msg: "Preencha todos os campos para continuar!"
            })
        } else {
            try {
                const res = await api.post('/signup', {
                    username, 
                    email, 
                    password
                })

                if(res.data) {
                    this.setState({
                        open: true, 
                        status: 'success', 
                        msg: "Adiocioando com sucesso!"
                    })
                    this.props.history.push('/login')
                }

            } catch(error) {
                this.setState({
                    open: true, 
                    status: 'error', 
                    msg: `${error}`
                })
            }   
        }
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
                            <FormLogin onSubmit={this.handleRegister}>
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
                                <Button type="submit">registrar</Button>
                                <ButtonLogin to="/login">Já possui conta!</ButtonLogin>
                            </FormLogin>
                            <Snackbar 
                                open={this.state.open}
                                close={ () => this.setState({ open: false })}
                                msg={this.state.msg} 
                                status={this.state.status}
                            />
                        </Box>
                    </Container>
                </Content>
            </Box>
        )
    }
}
