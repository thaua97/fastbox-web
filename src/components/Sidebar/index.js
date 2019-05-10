import React, { Component } from 'react';

import { Background, Content, UserHeader, UserInfo, UserImage, UserName, UserJob } from './styles';

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
                </Content>
            </Background>
        )
    }
}
