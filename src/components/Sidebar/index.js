import React from 'react'

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

import  { MdShoppingCart, MdAttachMoney, MdDomain, MdGroup, MdShoppingBasket } from 'react-icons/md'

const Sidebar = () => (
    <Background>
        <Content>
            <UserHeader>
                <UserImage src="https://i.imgur.com/u8JLa3E.jpg" alt="avatar"/>
                <UserInfo>
                    <UserName>Thauã Borges</UserName>
                    <UserJob>Teste do teste LTDA</UserJob>
                </UserInfo>
            </UserHeader>
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
            </List>
        </Content>
    </Background>
)
export default Sidebar