import React, { Component } from 'react';
import { App, Grid } from './styles.js'

/** Components */
import Sidebar from '../../components/Sidebar'
import Content from '../../components/Content'
import CardProduct from  '../../components/Cards/CardProduct'
import TextField from  '../../components/Inputs/TextField'
import Toolbar from  '../../components/Toolbar'

export default class Dashboard extends Component {
  render() {
    return (
      <App>
        <Sidebar></Sidebar>
        <Content
          childrens={
            <>
            <Toolbar />
            <Grid>
              <TextField title="Pesquisar"/>
              <CardProduct 
                title="Teste 1"
                url="/teste"
                image="https://i0.wp.com/derivandoleite.com.br/conteudo/uploads/2018/04/cropped-caixa-de-leite.png?resize=300%2C300&ssl=1"
              />
              <CardProduct 
                title="teste 2"
                url="/login"
                image="http://limpamaiscampinas.com.br/wp-content/uploads/2015/11/higienico-ROLAO.png"
              />
               <CardProduct 
                title="Teste 1"
                url="/login"
                image="https://i0.wp.com/derivandoleite.com.br/conteudo/uploads/2018/04/cropped-caixa-de-leite.png?resize=300%2C300&ssl=1"
              />
              <CardProduct 
                title="teste 2"
                image="https://images.pexels.com/photos/2146573/pexels-photo-2146573.jpeg"
              />
              <CardProduct 
                title="teste 2"
                url="/teste2"
                image="https://images.pexels.com/photos/2146573/pexels-photo-2146573.jpeg"
              />
              <CardProduct 
                title="teste 2"
                url=""
              />
              <CardProduct 
                title="teste 2"
                
              />
              <CardProduct 
                title="teste 2"
                url="/teste2"
                image="https://images.pexels.com/photos/2146573/pexels-photo-2146573.jpeg"
              />
              <CardProduct 
                title="teste 2"
                url=""
                image="https://images.pexels.com/photos/2146573/pexels-photo-2146573.jpeg"
              />
            </Grid>
            </>
          }
        />
      </App>
    )
  }
}
