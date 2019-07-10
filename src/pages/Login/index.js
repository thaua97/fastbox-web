import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../services/api'
import { login, setUser } from '../../services/auth'

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

function Login(props){
    
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ open, setOpen ] = useState(false)
    const [ status, setStatus ] = useState('')
    const [ msg, setMsg ] = useState('')
    

    function handleEmailChange(e){
        setEmail(e.target.value)
    }

    function handlePasswordChange(e){
        setPassword(e.target.value)
    }
    
    async function handleLogin(e){
        e.preventDefault()
        if(!email && !password) {
            setStatus('warning')
            setMsg('Preecha o e-mail e senha para continuar!')
            setOpen(true)
        } else if(!email) {
            setStatus('warning')
            setMsg('Preecha o e-mail para continuar!')
            setOpen(true)
        } else if(!password) {
            setStatus('warning')
            setMsg('Preecha a senha para continuar!')
            setOpen(true)
        } else {
            try {
                const res = await api.post('/signin', { 
                    email: email, 
                    password: password
                })
                login(res.data.token.token)
                setUser(res.data.user)
                
                props.history.push('/')
                
            } catch (err) {
                
                setStatus('danger')
                setMsg('Preecha e-mail e senha para continuar!')
                setOpen(true)
                
                console.log(err)
            }
        }
    }

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
                        <FormLogin onSubmit={handleLogin}>
                            <TextField 
                                placeholder="E-mail"
                                type="email"
                                onChange={handleEmailChange}
                            />
                            <TextField 
                                placeholder="Senha"
                                type="password"
                                onChange={handlePasswordChange}
                            />
                            <Button type="submit">Acessar</Button>
                            <p>Ou</p>
                            <ButtonRegister to="/register">Registrar</ButtonRegister>
                        </FormLogin>
                    </Box>
                    <Snackbar 
                        open={open}
                        close={ () => setOpen(false)}
                        msg={msg} 
                        status={status}
                    />
                </Container>
            </Content>
        </Box>
    )
}

export default withRouter(Login)
