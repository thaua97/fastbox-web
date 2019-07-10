import React, { useEffect, useState } from 'react'

import { 
    Background, 
    Content, 
    UserHeader, 
    UserInfo, 
    UserImage, 
    UserName, 
    UserJob, 
    List,
    ListTitle, 
    ListItem, 
    ListItemTitle 
} from './styles'

import  { MdShoppingCart, MdAttachMoney, MdDomain, MdGroup, MdShoppingBasket, MdPoll } from 'react-icons/md'


function Sidebar (props) {
    const [ user, setUser ] = useState({ })
    const [ image, setImage ] = useState(null)

    useEffect(
        () => {
            const userInfo = JSON.parse(localStorage.getItem("@fastbox-User"))
            setUser(userInfo)
           
        }, [user]
    )

    useEffect(() => {
        setImage(user.images)
    }, [user.images])
    
    return (
        <Background>
            <Content>
                {user && image !== null ?
                    <UserHeader>
                        <UserImage src={user.images.url || 'https://www.trzcacak.rs/myfile/full/65-650485_login-user-default-user-image-png.png' } alt="avatar"/>
                        <UserInfo>
                            <UserName>{user.username}</UserName>
                            <UserJob>{user.companies || 'Sem empresa'}</UserJob>
                        </UserInfo>
                    </UserHeader>
                    :
                    ''
                }
                <List>
                    <ListTitle>Utilitarios</ListTitle>
                    <ListItem to="/comprar">
                        <MdShoppingCart color={'#B131FF'} size={24}/>
                        <ListItemTitle>Comprar</ListItemTitle>
                    </ListItem>
                    <ListItem to="/vender">
                        <MdAttachMoney size={24} />
                        <ListItemTitle>Vender</ListItemTitle>
                    </ListItem>
                    <ListTitle>Minha Empresa</ListTitle>
                    <ListItem to="/admin/perfil">
                        <MdDomain color={'#B131FF'} size={24}/>
                        <ListItemTitle>Perfil</ListItemTitle>
                    </ListItem>
                    <ListItem to="/admin/usuarios">
                        <MdGroup size={24} />
                        <ListItemTitle>Usuarios</ListItemTitle>
                    </ListItem>
                    <ListItem to="/admin/pedidos">
                        <MdShoppingBasket size={24} />
                        <ListItemTitle>Pedidos</ListItemTitle>
                    </ListItem>
                    <ListItem to="/admin/pedidos">
                        <MdPoll size={24} />
                        <ListItemTitle>Estatisticas</ListItemTitle>
                    </ListItem>
                </List>
            </Content>
        </Background>
    )
}

export default Sidebar