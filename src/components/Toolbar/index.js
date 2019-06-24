import React, { useState } from 'react'

import { Bar, ToolbarList, ToolbarItem } from './styles'
import { MdMenu, MdNotifications } from 'react-icons/md'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { logout } from '../../services/auth'
import { withRouter } from 'react-router-dom'

function Toolbar(props){
    const [anchorEl, setAnchorEl] = useState(null)

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }
        
    function handleClose() {
        setAnchorEl(null)
    }

    function handleLogout() {
        logout()
        props.history.push('/login')
        
    }

    return (
        <Bar>
            <ToolbarList>
                <ToolbarItem><MdNotifications size="25"/></ToolbarItem>
                <ToolbarItem aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} ><MdMenu size="25"/></ToolbarItem>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    style={{ marginLeft: '-75px', marginTop: '35px'}}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleLogout}>Sair</MenuItem>
                </Menu>
            </ToolbarList>
        </Bar>
    )
   
}

export default withRouter(Toolbar)
