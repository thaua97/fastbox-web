import React, { useState, useEffect} from 'react'
import api from '../../services/api'
import Main from '../../templates/Main'
import CardProduct from  '../../components/Cards/CardProduct'
import TextField from  '../../components/Inputs/TextField'


export default function Dashboard() {
    const [ category, setCategory ] = useState(null)
    
    useEffect(() => {
      async function getCat() {
        const res = await api.get(`/categories`)
        setCategory(res.data)
      }
      getCat()
    }, [])
    
    return (  
      <Main>
          <TextField title="Pesquisar"/>
          {category && category.map( cat => (
              <CardProduct 
                text={cat.name}
                url={cat.id}
                image={cat.images && cat.images.url || 'https://utmsi.utexas.edu/components/com_easyblog/themes/wireframe/images/placeholder-image.png'}
              />
          ))
          
          }
      </Main>
    )
}
