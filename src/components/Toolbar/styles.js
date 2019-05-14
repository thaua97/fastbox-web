import styled from 'styled-components';

const Bar = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    width: 100%;
    
    position: relative;
    z-index: 1;
`;

const ToolbarList= styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const ToolbarItem= styled.li`
    cursor: pointer;
    height: 100%;
    width: 100%;
    padding: 10px;
    margin: 10px;
    border-radius: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    transition: 0.25s;

    :hover {
        background: #f3f3f3;
    }
`
   
export { Bar, ToolbarItem, ToolbarList }