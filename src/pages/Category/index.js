import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import styled from 'styled-components'

import Main from '../../templates/Main'
import CardProductList from '../../components/Cards/CardProductList'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`
const List = styled.div`
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

function Category(props) {
    const [ title, setTitle ] = useState('')
    const [ product, setProduct ] = useState([])

    useEffect(() => {
        async function getCat () {
            try {
                const res = await api.get(`/categories/${props.match.params.category}`)
                setProduct(res.data.products)
                setTitle(res.data.name)
            } catch (err) {

            }
        }
        getCat()
    })

    return (
        <Main>
            <ListContainer>
                <List>
                    <Typography variant="h5">{title}</Typography>
                </List>
                <Grid container spacing={2}>
                    {product && product.map( product => (
                        <Grid key={product.id} item xs={6}>
                            <CardProductList
                                title={product.title}
                                description={product.description}
                            />
                        </Grid>    
                    ))}
                </Grid>
            </ListContainer>
        </Main>
    )
}

export default Category