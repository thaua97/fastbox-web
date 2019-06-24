import React, { useEffect, useState} from 'react'
import styled from 'styled-components'

import Sidebar from '../../components/Sidebar'
import Content from '../../components/Content'
import Toolbar from  '../../components/Toolbar'

const App = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: space-between;
`
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
`
export default function Main(props){
  return (
    <App>
        <Sidebar></Sidebar>
        <Content>
            <Toolbar />
            <Grid>
                {props.children}
            </Grid>
        </Content>
    </App>
  )
}