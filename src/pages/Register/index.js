import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
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

function Register (props) {
    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ open, setOpen ] = useState(false)
    const [ status, setStatus ] = useState('')
    const [ msg, setMsg ] = useState('')

    function handleUsernameChange(e){
        setUsername(e.target.value)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handlePasswordChange(e){
        setPassword(e.target.value)
    }

   async function handleRegister(e) {
        e.preventDefault()
        
        if(!username && !email && !password) {
            setStatus('warning')
            setMsg('Preecha todas as informações para continuar!')
            setOpen(true)
        } else if(!email) {
            setStatus('warning')
            setMsg('Preecha o e-mail para continuar!')
            setOpen(true)
        } else if(!password) {
            setStatus('warning')
            setMsg('Preecha a senha para continuar!')
            setOpen(true)
        } else if(!username){
            setStatus('warning')
            setMsg('Preecha o nome do usuario para continuar!')
            setOpen(true)
        } else {
            try {
                const res = await api.post('/signup', {
                    username: username, 
                    email: email, 
                    password: password
                })

                if(res.data) {
                    setStatus('success')
                    setMsg('Preencha todos os campos para continuar!')
                    setOpen(true)
                }

            } catch(error) {
                setStatus('danger')
                setMsg('Preencha todos os campos para continuar!')
                setOpen(true)
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
                            <FormLogin onSubmit={handleRegister}>
                                <TextField 
                                    placeholder="Nome de Usuário"
                                    type="text"
                                    onChange={handleUsernameChange}
                                />
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
                                <Button type="submit">registrar</Button>
                                <ButtonLogin to="/login">Já possui conta!</ButtonLogin>
                            </FormLogin>
                            <Snackbar 
                                open={open}
                                close={ () => setOpen(false)}
                                msg={msg} 
                                status={status}
                            />
                        </Box>
                    </Container>
                </Content>
            </Box>
        )
}

export default withRouter(Register)