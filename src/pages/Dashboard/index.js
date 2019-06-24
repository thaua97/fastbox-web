import React, { useState, useEffect} from 'react';

import Main from '../../templates/Main'
import CardProduct from  '../../components/Cards/CardProduct'
import TextField from  '../../components/Inputs/TextField'


export default function Dashboard() {
    const { product, setProduct } = useState({})

    useEffect(() => {
      const products = [
        { text: "Teste 1", url: "teste", image: "https://i0.wp.com/derivandoleite.com.br/conteudo/uploads/2018/04/cropped-caixa-de-leite.png?resize=300%2C300&ssl=1"},
        { text: "Teste 1", url: "teste", image: "http://limpamaiscampinas.com.br/wp-content/uploads/2015/11/higienico-ROLAO.png"},
        { text: "Teste 1", url: "teste", image: "https://i0.wp.com/derivandoleite.com.br/conteudo/uploads/2018/04/cropped-caixa-de-leite.png?resize=300%2C300&ssl=1"},
        { text: "Teste 1", url: "teste", image: "https://i0.wp.com/derivandoleite.com.br/conteudo/uploads/2018/04/cropped-caixa-de-leite.png?resize=300%2C300&ssl=1"},
        { text: "Teste 1", url: "teste", image: "https://i0.wp.com/derivandoleite.com.br/conteudo/uploads/2018/04/cropped-caixa-de-leite.png?resize=300%2C300&ssl=1"},
        { text: "Teste 1", url: "teste", image: "https://i0.wp.com/derivandoleite.com.br/conteudo/uploads/2018/04/cropped-caixa-de-leite.png?resize=300%2C300&ssl=1"},
        { text: "Teste 1", url: "teste", image: "https://i0.wp.com/derivandoleite.com.br/conteudo/uploads/2018/04/cropped-caixa-de-leite.png?resize=300%2C300&ssl=1"},
        { text: "Teste 1", url: "teste", image: "https://i0.wp.com/derivandoleite.com.br/conteudo/uploads/2018/04/cropped-caixa-de-leite.png?resize=300%2C300&ssl=1"},
        { text: "Teste 1", url: "teste", image: "https://i0.wp.com/derivandoleite.com.br/conteudo/uploads/2018/04/cropped-caixa-de-leite.png?resize=300%2C300&ssl=1"},
      ]
      setProduct(products)
    }, [])

    return (
      <Main>
          <TextField title="Pesquisar"/>
          {product && product.map( product => (
              <CardProduct 
                text={product.text}
                url={product.url}
                image={product.image}
              />
          ))}
      </Main>
    )
}
