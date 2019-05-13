import React, { Component } from 'react'

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

export default class Sidebar extends Component {
  
    render() {
        return (
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
                        <ListItem>
                            <MdShoppingCart color={'#B131FF'} size={24}/>
                            <ListItemTitle>Comprar</ListItemTitle>
                        </ListItem>
                        <ListItem>
                            <MdAttachMoney size={24} />
                            <ListItemTitle>Vender</ListItemTitle>
                        </ListItem>
                        <ListTitle>Minha Empresa</ListTitle>
                        <ListItem onClick="">
                            <MdDomain color={'#B131FF'} size={24}/>
                            <ListItemTitle>Perfil</ListItemTitle>
                        </ListItem>
                        <ListItem>
                            <MdGroup size={24} />
                            <ListItemTitle>Usuarios</ListItemTitle>
                        </ListItem>
                        <ListItem>
                            <MdShoppingBasket size={24} />
                            <ListItemTitle>Pedidos</ListItemTitle>
                        </ListItem>
                    </List>
                </Content>
            </Background>
        )
    }
}
