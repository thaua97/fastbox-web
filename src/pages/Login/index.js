import React, { useState } from 'react'
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

function Login(){
    
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
        if(!email || !password) {
            setOpen(true)
            setStatus("warning")
            setMsg("Preecha e-mail e senha para continuar!")
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
                setOpen(true)
                setStatus("error")
                setMsg("Houve um problema com o login, verifique suas credenciais!")
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
