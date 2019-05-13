import styled from 'styled-components';

const Background = styled.aside`
    min-height: 800px;
    max-height: 100%;
    width: 300px;
    position: absolute;
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`
const UserHeader = styled.div`
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`
const UserInfo = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
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
const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    list-style-type: none;
`
const ListTitle = styled.h4`
    margin-left: 20%;
    padding: 10px 20px;
    color: #A17CB8;
    font-size: 14px;
    font-weight: 300;
    font-family: 'Nunito Sans', sans-serif;
`
const ListItem = styled.li`
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: #B131FF;
    padding: 10px 20px;
    transition: 0.2s;
    cursor: pointer;

    :hover {
        background: #f1f1f1;
    }
`
const  ListItemTitle = styled.h4`
    font-size: 20px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 300;
    padding-left: 35px;
`

export { Background, Content, UserHeader, UserInfo, UserImage, UserName, UserJob, List, ListTitle, ListItem, ListItemTitle }