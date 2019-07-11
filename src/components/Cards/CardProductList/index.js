import React from 'react';
import { withRouter, Link } from 'react-router-dom' 
import styled from 'styled-components'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import { MdVisibility } from 'react-icons/md'



const Btn = styled(Link)`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px; 
    background: #fff;
    transition: 0.2s all;
    
    :hover {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    }
`

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    margin: 10,
    height: '100%'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

function MediaControlCard(props) {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={props.img || 'https://utmsi.utexas.edu/components/com_easyblog/themes/wireframe/images/placeholder-image.png'}
        title={props.title}
      />  
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="body1" variant="body1">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {props.description}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
            <Btn to={`/produtos/${props.id}`}>
                <MdVisibility size={55}/>
            </Btn>
        </div>
      </div>
    </Card>
  )
}

export default withRouter(MediaControlCard)