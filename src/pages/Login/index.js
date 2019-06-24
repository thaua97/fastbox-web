import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../services/api'
import { login, setUser } from '../../services/auth'
import { decode } from 'jsonwebtoken'

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

import Snackbar from '../../components/Snackbar'

import fblogo from '../../assets/fastbox.svg'

class Login extends Component {
    state = {
        email: '',
        password: '',
        open: false,
        status: '',
        msg: ''
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }
    
    handleLogin = async (e) => {
        e.preventDefault()
        const { email, password } = this.state
        if(!email || !password) {
            this.setState({ 
                open: true,
                status: 'warning',
                msg: "Preecha e-mail e senha para continuar!"
            })
        } else {
            try {
                const res = await api.post('/signin', { email, password})
                login(res.data.token)
                
                const token = localStorage.getItem('@fastbox-Token')
                const dc = decode(token)
                const { uid } = dc
                const payload = await api.get(`/user/${uid}`)
                const user = payload.data 
                setUser(user)
                
                this.props.history.push('/')
                
            } catch (err) {
                this.setState({
                    open: true,
                    status: 'error',
                    msg: 'Houve um problema com o login, verifique suas credenciais. T.T'  
                })
                console.log(err)
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
                        <FormLogin onSubmit={this.handleLogin}>
                            <TextField 
                                placeholder="E-mail"
                                type="email"
                                onChange={this.handleEmailChange}
                            />
                            <TextField 
                                placeholder="Senha"
                                type="password"
                                onChange={this.handlePasswordChange}
                            />
                            <Button type="submit">Acessar</Button>
                            <p>Ou</p>
                            <ButtonRegister to="/register">Registrar</ButtonRegister>
                        </FormLogin>
                    </Box>
                    <Snackbar 
                        open={this.state.open}
                        close={ () => this.setState({ open: false })}
                        msg={this.state.msg} 
                        status={this.state.status}
                    />
                </Container>
            </Content>
        </Box>
    )
  }
}

export default withRouter(Login)
