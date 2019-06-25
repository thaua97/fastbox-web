import React, { useState, useEffect } from 'react'

import Main from '../../templates/Main'
import ItemsList from '../../components/List/ItemsList'

function Category(props) {
    const [ title, setTitle ] = useState('')
    const [ product, setProduct ] = useState([])

    useEffect(() => {
        setProduct([
          { text: "Teste 1", url: "teste", img: "https://i0.wp.com/derivandoleite.com.br/conteudo/uploads/2018/04/cropped-caixa-de-leite.png?resize=300%2C300&ssl=1"},
          { text: "Teste 1", url: "teste", img: "http://limpamaiscampinas.com.br/wp-content/uploads/2015/11/higienico-ROLAO.png"},
          { text: "Teste 1", url: "teste", img: "https://i0.wp.com/derivandoleite.com.br/conteudo/uploads/2018/04/cropped-caixa-de-leite.png?resize=300%2C300&ssl=1"},
          { text: "Teste 1", url: "teste", img: "https://i0.wp.com/derivandoleite.com.br/conteudo/uploads/2018/04/cropped-caixa-de-leite.png?resize=300%2C300&ssl=1"},
          { text: "Teste 1", url: "teste", img: "https://i0.wp.com/derivandoleite.com.br/conteudo/uploads/2018/04/cropped-caixa-de-leite.png?resize=300%2C300&ssl=1"},
          { text: "Teste 1", url: "teste", img: "https://i0.wp.com/derivandoleite.com.br/conteudo/uploads/2018/04/cropped-caixa-de-leite.png?resize=300%2C300&ssl=1"},
          { text: "Teste 1", url: "teste", img: "https://i0.wp.com/derivandoleite.com.br/conteudo/uploads/2018/04/cropped-caixa-de-leite.png?resize=300%2C300&ssl=1"},
          { text: "Teste 1", url: "teste", img: "https://i0.wp.com/derivandoleite.com.br/conteudo/uploads/2018/04/cropped-caixa-de-leite.png?resize=300%2C300&ssl=1"},
          { text: "Teste 1", url: "teste", img: "https://i0.wp.com/derivandoleite.com.br/conteudo/uploads/2018/04/cropped-caixa-de-leite.png?resize=300%2C300&ssl=1"}
        ])
    }, [])

    useEffect(() => {
        const tlt = props.match.params.category
        setTitle(tlt)
    }, [title])

    return (
        <Main>
            <p>{title}</p>
            <ItemsList data={product}/>
        </Main>
    )
}

export default Category