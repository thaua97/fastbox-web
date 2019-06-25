import React, { useState} from 'react'
import api from '../../services/api'

import Grid from '@material-ui/core/Grid'
import Main from '../../templates/Main'
import Card from '../../components/Cards/Card'

export default function Sale() {
  const [ item, setItem ] = useState([])

  return (
    <Main>
      <Grid spacing={3}>
          <Grid xs={12} md={6}>
            <Card
              title="teste"
              width={400}
              height={600}
            >
              <p>teste 2222</p>
            </Card>
          </Grid>
      </Grid>
    </Main>
  )
}
