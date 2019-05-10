import styled from 'styled-components';

const Background = styled.aside`
    min-height: 800px;
    max-height: 100%;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
    position: relative;
    top: 0;
    bottom: 0;
`
const Content = styled.div`
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const UserHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: space-between;
    
`
const UserInfo = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const UserImage = styled.img`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0, 0.2);
`
const UserName = styled.h3`
    color: #B131FF;
    font-size: 20px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
`
const UserJob = styled.p`
    color: #A17CB8;
    font-size: 12px;
    font-family: 'Nunito Sans', sans-serif;
`

export { Background, Content, UserHeader, UserInfo, UserImage, UserName, UserJob }